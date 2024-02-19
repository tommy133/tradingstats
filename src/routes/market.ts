import express, { Request, Response, Router } from "express";
import mysqlConnection from "./../config/db";
import { QueryError } from "mysql2";
import { Market } from "../model/market";

const router: Router = express.Router();
const marketQuery = `SELECT market.id_mkt, market.name_mkt FROM 
market`;

router.get("/", (req: Request, res: Response) => {
  mysqlConnection.query(marketQuery, (err: Error, rows: any[], fields: any) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    `${marketQuery} WHERE id_mkt = ?`,
    [req.params.id],
    (err: QueryError | null, row: any, fields: any) => {
      const market: Market = row[0];
      if (!err) res.send(market);
      else console.log(err);
    }
  );
});

export default router;
