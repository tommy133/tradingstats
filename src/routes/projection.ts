import express, { Request, Response, Router } from "express";
import mysqlConnection from "./../config/db";
import { Projection } from "../model/projection";
import { convertDatesToLocalTime } from "../utils/shared-utils";
import { QueryError } from "mysql2";
import { ProjectionComment } from "./pcomment";

const router: Router = express.Router();

const mapRowToProjection = (row: any): Projection => {
  return {
    id: row.id_proj,
    symbol: {
      id_sym: row.id_sym,
      name_sym: row.name_sym,
      market: { id_mkt: row.id_mkt, name_mkt: row.name_mkt },
    },
    updown: row.updown,
    date: row.date_proj,
    graph: row.graph,
    timeframe: row.name_tf,
    status: {
      id_st: row.id_st,
      name_st: row.name_st,
    },
  };
};

const queryGET = `SELECT projection.id_proj, symbol.id_sym, 
symbol.name_sym, projection.updown, projection.date_proj, projection.graph, 
projection.name_tf, status.id_st, status.name_st, market.id_mkt, market.name_mkt
FROM projection
JOIN symbol ON projection.id_sym = symbol.id_sym
JOIN status ON projection.id_st = status.id_st
JOIN market ON symbol.id_mkt = market.id_mkt`;

router.get("/", (req: Request, res: Response) => {
  const orderListByDate = "ORDER BY projection.date_proj DESC";
  mysqlConnection.query(
    queryGET + " " + orderListByDate,
    (err: Error, rows: Projection[]) => {
      if (!err) {
        const projections: Projection[] = rows.map(mapRowToProjection);
        res.json(projections);
      } else console.log(err);
    }
  );
});

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    queryGET + ` WHERE id_proj = ?`,
    [req.params.id],
    (err: QueryError | null, result: any) => {
      if (!err) {
        const projections: Projection[] = result.map(mapRowToProjection);
        convertDatesToLocalTime(projections);
        res.json(projections[0]);
      } else console.log(err);
    }
  );
});

router.post("/", (req: Request, res: Response) => {
  const { id_sym, updown, date_proj, graph, name_tf, id_st } = req.body;
  const sql =
    "INSERT INTO projection (id_sym, updown, date_proj, graph, name_tf, id_st) VALUES (?, ?, ?, ?, ?, ?)";
  mysqlConnection.query(
    sql,
    [id_sym, updown, date_proj, graph, name_tf, id_st],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting projection record");
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put("/:id", (req: Request, res: Response) => {
  const { updown, date_proj, graph, id_sym, name_tf, id_st } = req.body;
  const id = req.params.id;
  const sql = `UPDATE projection SET updown = IFNULL(?, updown), date_proj = IFNULL(?, date_proj), 
    graph = IFNULL(?, graph), id_sym = IFNULL(?, id_sym), name_tf = IFNULL(?, name_tf)
    , id_st = IFNULL(?, id_st) WHERE id_proj = ?`;
  mysqlConnection.query(
    sql,
    [updown, date_proj, graph, id_sym, name_tf, id_st, id],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating projection record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Projection record not found");
      } else {
        res.send(`${id}`);
      }
    }
  );
});

router.delete("/:id", (req: Request, res: Response) => {
  const projectionId = req.params.id;
  // Check if there are comments associated with the projection
  const checkCommentsSql = "SELECT * FROM pcomment WHERE id_proj = ?";
  mysqlConnection.query(
    checkCommentsSql,
    [projectionId],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error checking associated comments");
        return;
      }

      const comments: ProjectionComment[] = result;
      // If there are comments associated, delete them first
      if (comments.length > 0) {
        const deleteCommentSql = "DELETE FROM pcomment WHERE id_proj = ?";
        mysqlConnection.query(
          deleteCommentSql,
          [projectionId],
          (err: QueryError | null) => {
            if (err) {
              console.log(err);
              res.status(500).send("Error deleting projection comment record");
            }
          }
        );
      }
      deleteProjection(projectionId, res);
    }
  );
});

function deleteProjection(projectionId: string, res: Response) {
  const deleteProjectionSql = "DELETE FROM projection WHERE id_proj = ?";
  mysqlConnection.query(
    deleteProjectionSql,
    [projectionId],
    (err: QueryError | null, projectionResult: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting projection record");
      } else {
        if (projectionResult.affectedRows === 0) {
          res.status(404).send("Projection record not found");
        } else {
          res.send(`${projectionId}`);
        }
      }
    }
  );
}

export default router;
