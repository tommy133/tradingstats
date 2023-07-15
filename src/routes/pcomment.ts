import express, { Request, Response, Router } from 'express';
import mysqlConnection from './../config/db';
import { MysqlError } from 'mysql';

const router: Router = express.Router();

export interface ProjectionComment {
  id_pc?: number;
  pcomment?: string;
  id_proj: number;
}


router.get('/', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM pcomment`,
    (err: Error, rows: ProjectionComment[]) => {
      if (!err) res.json(rows);
      else console.log(err);
    }
  );
});

router.get('/:id', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT * FROM pcomment
    WHERE id_proj = ?`,
    [req.params.id],
    (err: MysqlError | null, rows: ProjectionComment[]) => {
      if (!err) res.json(rows[0]);
      else console.log(err);
    }
  );
});

router.post('/', (req: Request, res: Response) => {
  const { pcomment, id_proj } = req.body;
  const sql =
    'INSERT INTO pcomment (pcomment, id_proj) VALUES (?, ?)';
  mysqlConnection.query(
    sql,
    [pcomment, id_proj],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting projection record');
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put('/:id', (req: Request, res: Response) => {
  const { pcomment } = req.body;
  const id = req.params.id;
  const sql =
    `UPDATE pcomment SET pcomment=? WHERE id_pc = ?`;
  mysqlConnection.query(
    sql,
    [pcomment, id],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating projection record');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Projection record not found');
      } else {
        res.send(`${id}`);
      }
    }
  );
});


router.delete('/:id', (req: Request, res: Response) => {
  const sql = 'DELETE FROM pcomment WHERE id_pc = ?';
  mysqlConnection.query(sql, [req.params.id], (err: MysqlError | null, result: any) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting projection record');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Projection record not found');
    } else {
      res.send(`${req.params.id}`);
    }
  });
});

export default router;
