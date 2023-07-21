import express, { Request, Response, Router } from 'express';
import mysqlConnection from './../config/db';
import { MysqlError } from 'mysql';

const router: Router = express.Router();

interface Symbol {
  id: number;
  nameSymbol: string;
}

interface Status {
  id: number;
  nameStatus: string;
}

export interface Projection {
  id: number;
  symbol: Symbol;
  updown: boolean;
  date?: Date;
  graph?: string;
  timeframe: string;
  status: Status;
}

const mapRowToProjection = (row: any): Projection => {
  return {
    id: row.id_proj,
    symbol: {
      id: row.id_sym,
      nameSymbol: row.name_sym,
    },
    updown: row.updown,
    date: row.date_proj,
    graph: row.graph,
    timeframe: row.name_tf,
    status: {
      id: row.id_st,
      nameStatus: row.name_st,
    },
  };
};

router.get('/', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT projection.id_proj, symbol.id_sym, symbol.name_sym, projection.updown, projection.date_proj, projection.graph, projection.name_tf, status.id_st, status.name_st
    FROM projection
    JOIN symbol ON projection.id_sym = symbol.id_sym
    JOIN status ON projection.id_st = status.id_st`,
    (err: Error, rows: any[]) => {
      if (!err){
        const projections: Projection[] = rows.map(mapRowToProjection);
        res.json(projections);
      }
      else console.log(err);
    }
  );
});

router.get('/:id', (req: Request, res: Response) => {
  mysqlConnection.query(
    `SELECT projection.id_proj, symbol.name_sym, projection.updown, projection.date_proj, projection.graph, projection.name_tf, status.name_st
    FROM projection
    JOIN symbol ON projection.id_sym = symbol.id_sym
    JOIN status ON projection.id_st = status.id_st
    WHERE id_proj = ?`,
    [req.params.id],
    (err: MysqlError | null, rows: Projection[]) => {
      if (!err) {
        const projections: Projection[] = rows.map(mapRowToProjection);
        res.json(projections[0]);
      }
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
        res.send(`${result.insertId}`);
      }
    }
  );
});

router.put('/:id', (req: Request, res: Response) => {
  const { updown, date_proj, graph, id_sym, name_tf, id_st } = req.body;
  const id = req.params.id;
  const sql =
    `UPDATE projection SET updown = IFNULL(?, updown), date_proj = IFNULL(?, date_proj), 
    graph = IFNULL(?, graph), id_sym = IFNULL(?, id_sym), name_tf = IFNULL(?, name_tf)
    , id_st = IFNULL(?, id_st) WHERE id_proj = ?`;
  mysqlConnection.query(
    sql,
    [updown, date_proj, graph, id_sym, name_tf, id_st, id],
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
  const sql = 'DELETE FROM projection WHERE id_proj = ?';
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
