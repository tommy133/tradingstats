import express, { Request, Response, Router } from 'express';
import mysqlConnection from './../config/db';
import { MysqlError } from 'mysql';

const router: Router = express.Router();

export interface OperationComment {
  id_opc: number;
  opcomment: string;
  id_op: number;
}


router.get('/', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM opcomment`,
    (err: Error, rows: OperationComment[]) => {
      if (!err) res.json(rows);
      else console.log(err);
    }
  );
});

router.get('/:id', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM opcomment
    WHERE id_op = ?`,
    [req.params.id],
    (err: MysqlError | null, rows: OperationComment[]) => {
      if (!err) res.json(rows[0]);
      else console.log(err);
    }
  );
});

router.post('/', (req: Request, res: Response) => {
  const { opcomment, id_op } = req.body;
  const sql =
    'INSERT INTO opcomment (opcomment, id_op) VALUES (?, ?)';
  mysqlConnection.query(
    sql,
    [opcomment, id_op],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting operation comment record');
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put('/:id', (req: Request, res: Response) => {
  const { opcomment } = req.body;
  const id = req.params.id;
  const sql =
    `UPDATE opcomment SET opcomment=? WHERE id_opc = ?`;
  mysqlConnection.query(
    sql,
    [opcomment, id],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating operation comment record');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Operation comment record not found');
      } else {
        res.send(`${id}`);
      }
    }
  );
});


router.delete('/:id', (req: Request, res: Response) => {
  const sql = 'DELETE FROM opcomment WHERE id_op = ?';
  mysqlConnection.query(sql, [req.params.id], (err: MysqlError | null, result: any) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting operation comment record');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Operation comment record not found');
    } else {
      res.send(`${req.params.id}`);
    }
  });
});

export default router;
