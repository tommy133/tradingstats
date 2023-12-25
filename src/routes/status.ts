import express, { Request, Response, Router } from "express";
import mysqlConnection from "./../config/db";
import { QueryError } from "mysql2";
import { Status } from "../model/status";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT status.id_st, status.name_st FROM 
    status`,
    (err: Error, rows: any[], fields: any) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT status.id_st, status.name_st FROM status
    WHERE id_st = ?`,
    [req.params.id],
    (err: QueryError | null, row: any, fields: any) => {
      const status: Status = row[0];
      if (!err) res.send(status);
      else console.log(err);
    }
  );
});

export default router;
