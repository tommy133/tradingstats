import express, { Request, Response, Router } from 'express';
import mysqlConnection from './../config/db';
import { MysqlError } from 'mysql';
import { Operation } from '../model/operation';

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

export default router;
