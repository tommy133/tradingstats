import express, { Request, Response, Router } from 'express';
import mysqlConnection from './../config/db';
import { MysqlError } from 'mysql';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT symbol.id_sym, symbol.name_sym, symbol.description, market.name_mkt FROM 
    symbol JOIN market ON symbol.id_mkt = market.id_mkt;`,
    (err: Error, rows: any[], fields: any) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

router.get('/:id', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT symbol.id_sym, symbol.name_sym, symbol.description, market.name_mkt FROM 
    symbol JOIN market ON symbol.id_mkt = market.id_mkt
    WHERE id_sym = ?`,
    [req.params.id],
    (err: MysqlError | null, rows: any[], fields: any) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

router.post('/', (req: Request, res: Response) => {
  const { name_sym, description, id_mkt } = req.body;
  const sql =
    'INSERT INTO symbol (id_sym, name_sym, description, id_mkt) VALUES (NULL, ?, ?, ?)';
  mysqlConnection.query(
    sql,
    [name_sym, description, id_mkt],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting symbol record');
      } else {
        res.send(`Symbol record added with ID: ${result.insertId}`);
      }
    }
  );
});

router.put('/:id', (req: Request, res: Response) => {
    const { name_sym, description, id_mkt } = req.body;
    const id = req.params.id;
    const sql =
      'UPDATE symbol SET name_sym = IFNULL(?, name_sym), description = IFNULL(?, description), id_mkt = IFNULL(?, id_mkt) WHERE id_sym = ?';
    mysqlConnection.query(
      sql,
      [name_sym, description, id_mkt, id],
      (err: MysqlError | null, result: any) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error updating symbol record');
        } else if (result.affectedRows === 0) {
          res.status(404).send('Symbol record not found');
        } else {
          res.send(`Symbol record updated with ID: ${id}`);
        }
      }
    );
  });
  

router.delete('/:id', (req: Request, res: Response) => {
  const sql = 'DELETE FROM symbol WHERE id_sym = ?';
  mysqlConnection.query(sql, [req.params.id], (err: MysqlError | null, result: any) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting symbol record');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Symbol record not found');
    } else {
      res.send(`Symbol record deleted with ID: ${req.params.id}`);
    }
  });
});

export default router;
