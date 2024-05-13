import express, { Request, Response, Router } from "express";
import mysqlConnection from "./../config/db";
import { QueryError } from "mysql2";
import { Symbol } from "../model/symbol";

const router: Router = express.Router();

const queryGET = `SELECT symbol.id_sym, symbol.name_sym, symbol.description, 
symbol.id_mkt, market.name_mkt FROM symbol JOIN market ON symbol.id_mkt = market.id_mkt`;

router.get("/", (req: Request, res: Response) => {
  mysqlConnection.query(queryGET, (err: Error, rows: any, fields: any) => {
    const symbols: Symbol = rows;
    if (!err) res.send(symbols);
    else console.log(err);
  });
});

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    queryGET + ` WHERE id_sym = ?`,
    [req.params.id],
    (err: QueryError | null, result: any) => {
      const symbol = result[0];
      if (!err) res.send(symbol);
      else console.log(err);
    }
  );
});

router.post("/", (req: Request, res: Response) => {
  const { name_sym, description, id_mkt } = req.body;
  const sql =
    "INSERT INTO symbol (id_sym, name_sym, description, id_mkt) VALUES (NULL, ?, ?, ?)";
  mysqlConnection.query(
    sql,
    [name_sym, description, id_mkt],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting symbol record");
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put("/:id", (req: Request, res: Response) => {
  const { name_sym, description, id_mkt } = req.body;
  const id = req.params.id;
  const sql =
    "UPDATE symbol SET name_sym = IFNULL(?, name_sym), description = IFNULL(?, description), id_mkt = IFNULL(?, id_mkt) WHERE id_sym = ?";
  mysqlConnection.query(
    sql,
    [name_sym, description, id_mkt, id],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating symbol record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Symbol record not found");
      } else {
        res.send(`${id}`);
      }
    }
  );
});

router.delete("/:id", (req: Request, res: Response) => {
  const sql = "DELETE FROM symbol WHERE id_sym = ?";
  mysqlConnection.query(
    sql,
    [req.params.id],
    (err: QueryError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting symbol record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Symbol record not found");
      } else {
        res.send(`${req.params.id}`);
      }
    }
  );
});

export default router;
