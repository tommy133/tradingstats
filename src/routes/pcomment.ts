import express, { Request, Response, Router } from "express";
import { QueryError } from "mysql2";
import mysqlConnection from "./../config/db";

const router: Router = express.Router();

export interface ProjectionComment {
  id_pc: number;
  comment: string;
  id_proj: number;
  parent_id: number;
  inserted_at: string;
}

router.get("/", (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM pcomment`,
    (err: Error, rows: ProjectionComment[]) => {
      if (!err) res.json(rows);
      else console.log(err);
    }
  );
});

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM pcomment
    WHERE id_proj = ? ORDER BY pcomment.inserted_at DESC`,
    [req.params.id],
    (err: QueryError | null, results: any, fields: any) => {
      if (!err) {
        const rows: ProjectionComment[] = results;
        res.json(rows);
      } else console.log(err);
    }
  );
});

router.post("/", (req: Request, res: Response) => {
  const { comment, id_proj, parent_id } = req.body;
  const sql =
    "INSERT INTO pcomment (comment, id_proj, parent_id) VALUES (?, ?, ?)";
  mysqlConnection.query(
    sql,
    [comment, id_proj, parent_id],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting projection comment record");
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put("/:id", (req: Request, res: Response) => {
  const { comment } = req.body;
  const id = req.params.id;
  const sql = `UPDATE pcomment SET comment=? WHERE id_pc = ?`;
  mysqlConnection.query(
    sql,
    [comment, id],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating projection comment record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Projection comment record not found");
      } else {
        res.send(`${id}`);
      }
    }
  );
});

router.delete("/:id", (req: Request, res: Response) => {
  const sql = "DELETE FROM pcomment WHERE id_proj = ?";
  mysqlConnection.query(
    sql,
    [req.params.id],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting projection comment record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Projection comment record not found");
      } else {
        res.send(`${req.params.id}`);
      }
    }
  );
});

export default router;
