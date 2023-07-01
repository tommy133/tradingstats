import express, { Request, Response, Router } from 'express';
import mysqlConnection from './../config/db';
import { MysqlError } from 'mysql';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT symbol.name_sym, projection.updown, projection.date_proj, projection.graph, projection.name_tf, status.name_st
    FROM projection
    JOIN symbol ON projection.id_sym = symbol.id_sym
    JOIN status ON projection.id_st = status.id_st`,
    (err: Error, rows: any[], fields: any) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

router.get('/:id', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT symbol.name_sym, projection.updown, projection.date_proj, projection.graph, projection.name_tf, status.name_st
    FROM projection
    JOIN symbol ON projection.id_sym = symbol.id_sym
    JOIN status ON projection.id_st = status.id_st
    WHERE id_proj = ?`,
    [req.params.id],
    (err: MysqlError | null, rows: any[], fields: any) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

router.post('/', (req: Request, res: Response) => {
  const { id_sym, updown, date_proj, graph, name_tf, id_st } = req.body;
  const sql =
    'INSERT INTO projection (id_sym, updown, date_proj, graph, name_tf, id_st) VALUES (?, ?, ?, ?, ?, ?)';
  mysqlConnection.query(
    sql,
    [id_sym, updown, date_proj, graph, name_tf, id_st],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting projection record');
      } else {
        res.send(`Projection record added with ID: ${result.insertId}`);
      }
    }
  );
});

router.put('/:id', (req: Request, res: Response) => {
  const { updown, date_proj, graph } = req.body;
  const sql =
    'UPDATE projection SET updown = ?, date_proj = ?, graph = ? WHERE id_proj = ?';
  mysqlConnection.query(
    sql,
    [updown, date_proj, graph, req.params.id],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating projection record');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Projection record not found');
      } else {
        res.send(`Projection record updated with ID: ${req.params.id}`);
      }
    }
  );
});

router.delete('/:id', (req: Request, res: Response) => {
  const sql = 'DELETE FROM projection WHERE id_proj = ?';
  mysqlConnection.query(sql, [req.params.id], (err: MysqlError | null, result: any) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting projection record');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Projection record not found');
    } else {
      res.send(`Projection record deleted with ID: ${req.params.id}`);
    }
  });
});

export default router;
