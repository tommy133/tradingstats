import express, { Request, Response, Router } from "express";
import { QueryError } from "mysql2";
import { Symbol } from "../model/symbol";
import mysqlConnection from "./../config/db";

const router: Router = express.Router();

const mapRowToSymbol = (row: any): Symbol => {
  return {
    id_sym: row.id_sym,
    name_sym: row.name_sym,
    market: {
      id_mkt: row.id_mkt,
      name_mkt: row.name_mkt,
    },
    bt_checkpoint: row.bt_checkpoint,
    description: row.description,
  };
};

const queryGET = `SELECT symbol.id_sym, symbol.name_sym, symbol.bt_checkpoint, symbol.description, 
symbol.id_mkt, market.name_mkt FROM symbol JOIN market ON symbol.id_mkt = market.id_mkt`;

router.get("/", (req: Request, res: Response) => {
  mysqlConnection.query(queryGET, (err: Error, rows: any, fields: any) => {
    const symbols = rows.map(mapRowToSymbol);
    if (!err) res.send(symbols);
    else console.log(err);
  });
});

router.get("/:id", (req: Request, res: Response) => {
  mysqlConnection.query(
    queryGET + ` WHERE id_sym = ?`,
    [req.params.id],
    (err: QueryError | null, result: any) => {
      const symbols = result.map(mapRowToSymbol);
      if (!err) res.send(symbols[0]);
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
  const { name_sym, bt_checkpoint, description, id_mkt } = req.body;
  const id = req.params.id;
  const sql =
    "UPDATE symbol SET name_sym = IFNULL(?, name_sym), bt_checkpoint = IFNULL(?, bt_checkpoint), description = IFNULL(?, description), id_mkt = IFNULL(?, id_mkt) WHERE id_sym = ?";
  mysqlConnection.query(
    sql,
    [name_sym, bt_checkpoint, description, id_mkt, id],
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
