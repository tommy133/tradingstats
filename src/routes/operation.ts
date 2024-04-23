import express, { Request, Response, Router } from "express";
import mysqlConnection from "./../config/db";
import { Operation } from "../model/operation";
import { convertDatesToLocalTime } from "../utils/shared-utils";
import { QueryError } from "mysql2";
import { OperationComment } from "./opcomment";

const router: Router = express.Router();

const mapRowToOperation = (row: any): Operation => {
  return {
    id: row.id_op,
    symbol: {
      id_sym: row.id_sym,
      name_sym: row.name_sym,
      name_mkt: row.name_mkt,
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
    market: {
      id_mkt: row.id_mkt,
      name_mkt: row.name_mkt,
    },
    volume: row.volume,
    ratio: row.rr_ratio,
    revenue: row.revenue,
  };
};

const queryGET = `SELECT operation.id_op, symbol.id_sym, symbol.name_sym, symbol.id_mkt, operation.updown, 
operation.time_op, operation.time_close, operation.name_tf, operation.graph, status.id_st, market.id_mkt, market.name_mkt, 
status.name_st, account.id_ac, account.account_type, operation.volume, operation.rr_ratio, operation.revenue
FROM operation JOIN symbol ON operation.id_sym = symbol.id_sym JOIN status ON operation.id_st = status.id_st 
JOIN account ON operation.id_ac = account.id_ac JOIN market ON symbol.id_mkt = market.id_mkt`;

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

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    queryGET + ` WHERE id_op = ?`,
    [req.params.id],
    (err: QueryError | null, result: any) => {
      if (!err) {
        const operations: Operation[] = result.map(mapRowToOperation);
        convertDatesToLocalTime(operations);
        res.json(operations[0]);
      } else console.log(err);
    }
  );
});

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
    volume,
    rr_ratio,
    revenue,
  } = req.body;
  const sql =
    "INSERT INTO operation (id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, revenue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
      volume,
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

router.put("/:id", (req: Request, res: Response) => {
  const {
    id_sym,
    updown,
    time_op,
    time_close,
    graph,
    name_tf,
    id_st,
    id_ac,
    volume,
    rr_ratio,
    revenue,
  } = req.body;
  const id = req.params.id;
  const sql = `UPDATE operation SET id_sym = IFNULL(?, id_sym), updown = IFNULL(?, updown), time_op = IFNULL(?, time_op),
    time_close = IFNULL(?, time_close), graph = IFNULL(?, graph), name_tf = IFNULL(?, name_tf), 
    id_st = IFNULL(?, id_st), id_ac = IFNULL(?, id_ac), volume = IFNULL(?, volume), rr_ratio = IFNULL(?, rr_ratio)
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
      volume,
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

router.delete("/:id", (req: Request, res: Response) => {
  const operationId = req.params.id;
  // Check if there are comments associated with the operation
  const checkCommentsSql = "SELECT * FROM opcomment WHERE id_op = ?";
  mysqlConnection.query(
    checkCommentsSql,
    [operationId],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error checking associated comments");
        return;
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
              res.status(500).send("Error deleting operation comment record");
            }
          }
        );
      }
      deleteOperation(operationId, res);
    }
  );
});

function deleteOperation(operationId: string, res: Response) {
  const deleteOperationSql = "DELETE FROM operation WHERE id_op = ?";
  mysqlConnection.query(
    deleteOperationSql,
    [operationId],
    (err: QueryError | null, operationResult: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting operation record");
      } else {
        if (operationResult.affectedRows === 0) {
          res.status(404).send("Operation record not found");
        } else {
          res.send(`${operationId}`);
        }
      }
    }
  );
}

export default router;
