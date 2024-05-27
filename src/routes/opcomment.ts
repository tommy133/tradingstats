import express, { Request, Response, Router } from "express";
import { QueryError } from "mysql2";
import mysqlConnection from "./../config/db";

const router: Router = express.Router();

export interface OperationComment {
  id_opc: number;
  comment: string;
  id_op: number;
  inserted_at: string;
}

router.get("/", (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM opcomment`,
    (err: Error, rows: OperationComment[]) => {
      if (!err) res.json(rows);
      else console.log(err);
    }
  );
});

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM opcomment
    WHERE id_op = ? ORDER BY opcomment.inserted_at DESC`,
    [req.params.id],
    (err: QueryError | null, result: any) => {
      if (!err) {
        const rows: OperationComment[] = result;
        res.json(rows);
      } else console.log(err);
    }
  );
});

router.post("/", (req: Request, res: Response) => {
  const { comment, id_op } = req.body;
  const sql = "INSERT INTO opcomment (comment, id_op) VALUES (?, ?)";
  mysqlConnection.query(
    sql,
    [comment, id_op],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting operation comment record");
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put("/:id", (req: Request, res: Response) => {
  const { comment } = req.body;
  const id = req.params.id;
  const sql = `UPDATE opcomment SET comment=? WHERE id_opc = ?`;
  mysqlConnection.query(
    sql,
    [comment, id],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating operation comment record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Operation comment record not found");
      } else {
        res.send(`${id}`);
      }
    }
  );
});

router.delete("/:id", (req: Request, res: Response) => {
  const sql = "DELETE FROM opcomment WHERE id_op = ?";
  mysqlConnection.query(
    sql,
    [req.params.id],
    (err: QueryError | null, result: any, fields: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting operation comment record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Operation comment record not found");
      } else {
        res.send(`${req.params.id}`);
      }
    }
  );
});

export default router;
