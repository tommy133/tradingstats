import express, { Request, Response, Router } from "express";
import { QueryError } from "mysql2";
import { Operation } from "../model/operation";
import { convertDatesToLocalTime } from "../utils/shared-utils";
import mysqlConnection from "./../config/db";
import { OperationComment } from "./opcomment";

const router: Router = express.Router();

const mapRowToOperation = (row: any): Operation => {
  const checklist =
    typeof row.checklist === "string" || row.checklist instanceof String
      ? JSON.parse(row.checklist)
      : row.checklist; //hack for production/local
  return {
    id: row.id_op,
    symbol: {
      id_sym: row.id_sym,
      name_sym: row.name_sym,
      market: { id_mkt: row.id_mkt, name_mkt: row.name_mkt },
    },
    updown: row.updown,
    dateOpen: row.time_op,
    dateClose: row.time_close,
    timeframe: row.name_tf,
    graph: row.graph,
    status: {
      id_st: row.id_st,
      name_st: row.name_st,
    },
    account: {
      id_ac: row.id_ac,
      account_type: row.account_type,
    },
    checklist: checklist,
    ratio: row.rr_ratio,
    revenue: row.revenue,
    inserted_at: row.inserted_at,
    updated_at: row.updated_at,
  };
};

const queryGET = `SELECT operation.id_op, symbol.id_sym, symbol.name_sym, symbol.id_mkt, operation.updown, 
operation.time_op, operation.time_close, operation.name_tf, operation.graph, status.id_st, market.id_mkt, market.name_mkt, 
status.name_st, account.id_ac, account.account_type, operation.checklist, operation.rr_ratio, operation.revenue,
operation.inserted_at, operation.updated_at
FROM operation JOIN symbol ON operation.id_sym = symbol.id_sym JOIN status ON operation.id_st = status.id_st 
JOIN account ON operation.id_ac = account.id_ac JOIN market ON symbol.id_mkt = market.id_mkt`;

const queryPOST = `INSERT INTO operation (id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, checklist, rr_ratio, revenue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

router.get("/", (req: Request, res: Response) => {
  const orderListByDate = "ORDER BY operation.time_op DESC";
  mysqlConnection.query(
    queryGET + " " + orderListByDate,
    (err: Error, rows: Operation[]) => {
      if (!err) {
        const operations: Operation[] = rows.map(mapRowToOperation);
        res.json(operations);
      } else console.log(err);
    }
  );
});

router.get("/:opId", (req: Request, res: Response) => {
  mysqlConnection.query(
    queryGET + ` WHERE id_op = ?`,
    [req.params.opId],
    (err: QueryError | null, result: any) => {
      if (!err) {
        const operations: Operation[] = result.map(mapRowToOperation);
        convertDatesToLocalTime(operations);
        res.json(operations[0]);
      } else console.log(err);
    }
  );
});

//Get operation related with given projection
router.get("/projectionAssoc/:projId", (req: Request, res: Response) => {
  mysqlConnection.query(
    "SELECT * FROM `r_projection_operation` JOIN operation ON r_projection_operation.id_op = operation.id_op WHERE id_proj = ?",
    [req.params.projId],
    (err: QueryError | null, result: any) => {
      if (!err) {
        const operations: Operation[] = result.map(mapRowToOperation);
        convertDatesToLocalTime(operations);
        res.json(operations[0]);
      } else console.log(err);
    }
  );
});

//add operation
router.post("/", (req: Request, res: Response) => {
  const {
    id_sym,
    updown,
    time_op,
    time_close,
    graph,
    name_tf,
    id_st,
    id_ac,
    checklist,
    rr_ratio,
    revenue,
  } = req.body;

  const checklistJSON = JSON.stringify(checklist);

  mysqlConnection.query(
    queryPOST,
    [
      id_sym,
      updown,
      time_op,
      time_close,
      graph,
      name_tf,
      id_st,
      id_ac,
      checklistJSON,
      rr_ratio,
      revenue,
    ],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting operation record");
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

//add operation from given projection and relate them
router.post("/addFromProj/:projId", (req: Request, res: Response) => {
  const {
    id_sym,
    updown,
    time_op,
    time_close,
    graph,
    name_tf,
    id_st,
    id_ac,
    checklist,
    rr_ratio,
    revenue,
  } = req.body;
  const projId = req.params.projId;
  const checklistJSON = JSON.stringify(checklist);

  // Start a transaction
  mysqlConnection.beginTransaction((err: QueryError | null) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error starting transaction");
      return;
    }

    mysqlConnection.query(
      queryPOST,
      [
        id_sym,
        updown,
        time_op,
        time_close,
        graph,
        name_tf,
        id_st,
        id_ac,
        checklistJSON,
        rr_ratio,
        revenue,
      ],
      (err: QueryError | null, result: any) => {
        if (err) {
          console.log(err);
          return mysqlConnection.rollback(() => {
            res.status(500).send("Error inserting operation record");
          });
        }

        const opId = result.insertId;
        if (opId) {
          const insertRelationSql =
            "INSERT INTO r_projection_operation (id_proj, id_op) VALUES (?, ?)";
          mysqlConnection.query(
            insertRelationSql,
            [projId, opId],
            (err: QueryError | null, relationResult: any) => {
              if (err) {
                console.log(err);
                return mysqlConnection.rollback(() => {
                  res
                    .status(500)
                    .send(
                      "Error inserting projection-operation relation record"
                    );
                });
              }

              // Commit the transaction if everything succeeded
              mysqlConnection.commit((err: QueryError | null) => {
                if (err) {
                  console.log(err);
                  return mysqlConnection.rollback(() => {
                    res.status(500).send("Error committing transaction");
                  });
                }

                res.send(`${opId}`);
              });
            }
          );
        } else {
          mysqlConnection.rollback(() => {
            res.status(500).send("Error retrieving operation ID");
          });
        }
      }
    );
  });
});

router.put("/:opId", (req: Request, res: Response) => {
  const {
    id_sym,
    updown,
    time_op,
    time_close,
    graph,
    name_tf,
    id_st,
    id_ac,
    rr_ratio,
    revenue,
  } = req.body;
  const id = req.params.opId;
  const sql = `UPDATE operation SET id_sym = IFNULL(?, id_sym), updown = IFNULL(?, updown), time_op = IFNULL(?, time_op),
    time_close = IFNULL(?, time_close), graph = IFNULL(?, graph), name_tf = IFNULL(?, name_tf), 
    id_st = IFNULL(?, id_st), id_ac = IFNULL(?, id_ac), rr_ratio = IFNULL(?, rr_ratio)
    , revenue = IFNULL(?, revenue)  WHERE id_op = ?`;
  mysqlConnection.query(
    sql,
    [
      id_sym,
      updown,
      time_op,
      time_close,
      graph,
      name_tf,
      id_st,
      id_ac,
      rr_ratio,
      revenue,
      id,
    ],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating operation record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Operation record not found");
      } else {
        res.send(`${id}`);
      }
    }
  );
});

router.delete("/:opId", (req: Request, res: Response) => {
  const operationId = req.params.opId;

  // Start a transaction
  mysqlConnection.beginTransaction((err: QueryError | null) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error starting transaction");
      return;
    }

    // Check if there is a relation with a projection
    const checkProjectionSql =
      "SELECT * FROM r_projection_operation WHERE id_op = ?";
    mysqlConnection.query(
      checkProjectionSql,
      [operationId],
      (err: QueryError | null, relationResult: any) => {
        if (err) {
          console.log(err);
          return mysqlConnection.rollback(() => {
            res.status(500).send("Error checking projection association");
          });
        }

        if (relationResult.length > 0) {
          // There is a relation with a projection, delete it first
          const deleteProjectionRelationSql =
            "DELETE FROM r_projection_operation WHERE id_op = ?";
          mysqlConnection.query(
            deleteProjectionRelationSql,
            [operationId],
            (err: QueryError | null) => {
              if (err) {
                console.log(err);
                return mysqlConnection.rollback(() => {
                  res
                    .status(500)
                    .send(
                      "Error deleting projection-operation relation record"
                    );
                });
              }
            }
          );
        }
        //once deleted relation if there are, delete comments and operation
        checkCommentsAndDeleteOperation(operationId, res);
      }
    );
  });
});

//can't atomize this function
function checkCommentsAndDeleteOperation(operationId: string, res: Response) {
  const checkCommentsSql = "SELECT * FROM opcomment WHERE id_op = ?";
  mysqlConnection.query(
    checkCommentsSql,
    [operationId],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        return mysqlConnection.rollback(() => {
          res.status(500).send("Error checking associated comments");
        });
      }

      const comments: OperationComment[] = result;

      // If there are comments associated, delete them first
      if (comments.length > 0) {
        const deleteCommentSql = "DELETE FROM opcomment WHERE id_op = ?";
        mysqlConnection.query(
          deleteCommentSql,
          [operationId],
          (err: QueryError | null, commentResult: any) => {
            if (err) {
              console.log(err);
              return mysqlConnection.rollback(() => {
                res.status(500).send("Error deleting operation comment record");
              });
            }
          }
        );
      }
      //once deleted comments if there are, delete operation
      deleteOperation(operationId, res);
    }
  );
}

function deleteOperation(operationId: string, res: Response) {
  const deleteOperationSql = "DELETE FROM operation WHERE id_op = ?";
  mysqlConnection.query(
    deleteOperationSql,
    [operationId],
    (err: QueryError | null, operationResult: any) => {
      if (err) {
        console.log(err);
        return mysqlConnection.rollback(() => {
          res.status(500).send("Error deleting operation record");
        });
      }

      if (operationResult.affectedRows === 0) {
        return mysqlConnection.rollback(() => {
          res.status(404).send("Operation record not found");
        });
      }

      // Commit the transaction if everything succeeded
      mysqlConnection.commit((err: QueryError | null) => {
        if (err) {
          console.log(err);
          return mysqlConnection.rollback(() => {
            res.status(500).send("Error committing transaction");
          });
        }

        res.send(`${operationId}`);
      });
    }
  );
}

export default router;
