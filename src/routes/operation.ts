import express, { Request, Response, Router } from 'express';
import mysqlConnection from './../config/db';
import { MysqlError } from 'mysql';
import { Operation } from '../model/operation';
import { convertDatesToLocalTime } from '../utils/shared-utils';

const router: Router = express.Router();

const mapRowToOperation = (row: any): Operation => {
    return {
      id: row.id_op,
      symbol: {
        id_sym: row.id_sym,
        name_sym: row.name_sym,
        name_mkt: row.name_mkt,
      },
      updown: row.updown,
      dateOpen: row.time_op,
      dateClose: row.time_close,
      timeframe: row.name_tf,
      graph: row.graph,
      status: {
        id_st: row.id_st,
        name_st: row.name_st,
      },
      account: {
        id_ac: row.id_ac,
        account_type: row.account_type,
    },
    volume: row.volume,
    ratio: row.rr_ratio,
    points: row.points,
    };
};

const queryGET = `SELECT operation.id_op, symbol.id_sym, symbol.name_sym, symbol.id_mkt, operation.updown, 
operation.time_op, operation.time_close, operation.name_tf, operation.graph, status.id_st, 
status.name_st, account.id_ac, account.account_type, operation.volume, operation.rr_ratio, operation.points
FROM operation JOIN symbol ON operation.id_sym = symbol.id_sym JOIN status ON operation.id_st = status.id_st 
JOIN account ON operation.id_ac = account.id_ac`

router.get('/', (req: Request, res: Response) => {
  mysqlConnection.query(
      queryGET,
    (err: Error, rows: Operation[]) => {
      if (!err){
        const operations: Operation[] = rows.map(mapRowToOperation);
        res.json(operations);
      }
      else console.log(err);
    }
  );
});

router.get('/:id', (req: Request, res: Response) => {
  mysqlConnection.query(
    queryGET + ` WHERE id_op = ?`,
    [req.params.id],
    (err: MysqlError | null, rows: Operation[]) => {
      if (!err) {
        const operations: Operation[] = rows.map(mapRowToOperation);
        convertDatesToLocalTime(operations);
        res.json(operations[0]);
      }
      else console.log(err);
    }
  );
});

router.post('/', (req: Request, res: Response) => {
  const { id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points } = req.body;
  const sql =
    'INSERT INTO operation (id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  mysqlConnection.query(
    sql,
    [id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error inserting operation record');
      } else {
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put('/:id', (req: Request, res: Response) => {
  const { id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points } = req.body;
  const id = req.params.id;
  const sql =
    `UPDATE operation SET id_sym = IFNULL(?, id_sym), updown = IFNULL(?, updown), time_op = IFNULL(?, time_op),
    time_close = IFNULL(?, time_close), graph = IFNULL(?, graph), name_tf = IFNULL(?, name_tf), 
    id_st = IFNULL(?, id_st), id_ac = IFNULL(?, id_ac), volume = IFNULL(?, volume), rr_ratio = IFNULL(?, rr_ratio)
    , points = IFNULL(?, points)  WHERE id_op = ?`;
  mysqlConnection.query(
    sql,
    [id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points, id],
    (err: MysqlError | null, result: any) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating operation record');
      } else if (result.affectedRows === 0) {
        res.status(404).send('Operation record not found');
      } else {
        res.send(`${id}`);
      }
    }
  );
});

export default router;
