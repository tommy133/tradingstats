"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../config/db"));
const shared_utils_1 = require("../utils/shared-utils");
const router = express_1.default.Router();
const mapRowToOperation = (row) => {
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
JOIN account ON operation.id_ac = account.id_ac`;
router.get('/', (req, res) => {
    db_1.default.query(queryGET, (err, rows) => {
        if (!err) {
            const operations = rows.map(mapRowToOperation);
            res.json(operations);
        }
        else
            console.log(err);
    });
});
router.get('/:id', (req, res) => {
    db_1.default.query(queryGET + ` WHERE id_op = ?`, [req.params.id], (err, rows) => {
        if (!err) {
            const operations = rows.map(mapRowToOperation);
            (0, shared_utils_1.convertDatesToLocalTime)(operations);
            res.json(operations[0]);
        }
        else
            console.log(err);
    });
});
router.post('/', (req, res) => {
    const { id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points } = req.body;
    const sql = 'INSERT INTO operation (id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db_1.default.query(sql, [id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error inserting operation record');
        }
        else {
            res.send(`${result.insertId}`);
        }
    });
});
router.put('/:id', (req, res) => {
    const { id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points } = req.body;
    const id = req.params.id;
    const sql = `UPDATE operation SET id_sym = IFNULL(?, id_sym), updown = IFNULL(?, updown), time_op = IFNULL(?, time_op),
    time_close = IFNULL(?, time_close), graph = IFNULL(?, graph), name_tf = IFNULL(?, name_tf), 
    id_st = IFNULL(?, id_st), id_ac = IFNULL(?, id_ac), volume = IFNULL(?, volume), rr_ratio = IFNULL(?, rr_ratio)
    , points = IFNULL(?, points)  WHERE id_op = ?`;
    db_1.default.query(sql, [id_sym, updown, time_op, time_close, graph, name_tf, id_st, id_ac, volume, rr_ratio, points, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error updating operation record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Operation record not found');
        }
        else {
            res.send(`${id}`);
        }
    });
});
router.delete('/:id', (req, res) => {
    const operationId = req.params.id;
    // Check if there are comments associated with the operation
    const checkCommentsSql = 'SELECT * FROM opcomment WHERE id_op = ?';
    db_1.default.query(checkCommentsSql, [operationId], (err, comments) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error checking associated comments');
            return;
        }
        // If there are comments associated, delete them first
        if (comments.length > 0) {
            const deleteCommentSql = 'DELETE FROM opcomment WHERE id_op = ?';
            db_1.default.query(deleteCommentSql, [operationId], (err, commentResult) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error deleting operation comment record');
                }
            });
        }
        checkDeleteFile(operationId);
        deleteOperation(operationId, res);
    });
});
function checkDeleteFile(idProj) {
    const sql = `SELECT graph FROM operation WHERE id_op = ?`;
    db_1.default.query(sql, [idProj], (err, rows) => {
        if (!err) {
            if (rows[0].graph !== null) {
                const fs = require('fs');
                const path = require('path');
                const filePath = path.join(__dirname, `../../uploads/${rows[0].graph}`);
                fs.unlink(filePath, (err) => {
                    if (err)
                        throw err;
                });
            }
        }
        else
            console.log(err);
    });
}
function deleteOperation(operationId, res) {
    const deleteOperationSql = 'DELETE FROM operation WHERE id_op = ?';
    db_1.default.query(deleteOperationSql, [operationId], (err, operationResult) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting operation record');
        }
        else {
            if (operationResult.affectedRows === 0) {
                res.status(404).send('Operation record not found');
            }
            else {
                res.send(`${operationId}`);
            }
        }
    });
}
exports.default = router;
