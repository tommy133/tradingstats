"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../config/db"));
const shared_utils_1 = require("../utils/shared-utils");
const router = express_1.default.Router();
const mapRowToProjection = (row) => {
    return {
        id: row.id_proj,
        symbol: {
            id_sym: row.id_sym,
            name_sym: row.name_sym,
            name_mkt: row.name_mkt,
        },
        updown: row.updown,
        date: row.date_proj,
        graph: row.graph,
        timeframe: row.name_tf,
        status: {
            id_st: row.id_st,
            name_st: row.name_st,
        },
    };
};
const queryGET = `SELECT projection.id_proj, symbol.id_sym, 
symbol.name_sym, projection.updown, projection.date_proj, projection.graph, 
projection.name_tf, status.id_st, status.name_st
FROM projection
JOIN symbol ON projection.id_sym = symbol.id_sym
JOIN status ON projection.id_st = status.id_st`;
router.get('/', (req, res) => {
    db_1.default.query(queryGET, (err, rows) => {
        if (!err) {
            const projections = rows.map(mapRowToProjection);
            res.json(projections);
        }
        else
            console.log(err);
    });
});
router.get('/:id', (req, res) => {
    db_1.default.query(queryGET + ` WHERE id_proj = ?`, [req.params.id], (err, rows) => {
        if (!err) {
            const projections = rows.map(mapRowToProjection);
            (0, shared_utils_1.convertDatesToLocalTime)(projections);
            res.json(projections[0]);
        }
        else
            console.log(err);
    });
});
router.post('/', (req, res) => {
    const { id_sym, updown, date_proj, graph, name_tf, id_st } = req.body;
    const sql = 'INSERT INTO projection (id_sym, updown, date_proj, graph, name_tf, id_st) VALUES (?, ?, ?, ?, ?, ?)';
    db_1.default.query(sql, [id_sym, updown, date_proj, graph, name_tf, id_st], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error inserting projection record');
        }
        else {
            res.send(`${result.insertId}`);
        }
    });
});
router.put('/:id', (req, res) => {
    const { updown, date_proj, graph, id_sym, name_tf, id_st } = req.body;
    const id = req.params.id;
    const sql = `UPDATE projection SET updown = IFNULL(?, updown), date_proj = IFNULL(?, date_proj), 
    graph = IFNULL(?, graph), id_sym = IFNULL(?, id_sym), name_tf = IFNULL(?, name_tf)
    , id_st = IFNULL(?, id_st) WHERE id_proj = ?`;
    db_1.default.query(sql, [updown, date_proj, graph, id_sym, name_tf, id_st, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error updating projection record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Projection record not found');
        }
        else {
            res.send(`${id}`);
        }
    });
});
router.delete('/:id', (req, res) => {
    const projectionId = req.params.id;
    // Check if there are comments associated with the projection
    const checkCommentsSql = 'SELECT * FROM pcomment WHERE id_proj = ?';
    db_1.default.query(checkCommentsSql, [projectionId], (err, comments) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error checking associated comments');
            return;
        }
        // If there are comments associated, delete them first
        if (comments.length > 0) {
            const deleteCommentSql = 'DELETE FROM pcomment WHERE id_proj = ?';
            db_1.default.query(deleteCommentSql, [projectionId], (err, commentResult) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error deleting projection comment record');
                }
            });
        }
        checkDeleteFile(projectionId);
        deleteProjection(projectionId, res);
    });
});
function deleteProjection(projectionId, res) {
    const deleteProjectionSql = 'DELETE FROM projection WHERE id_proj = ?';
    db_1.default.query(deleteProjectionSql, [projectionId], (err, projectionResult) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting projection record');
        }
        else {
            if (projectionResult.affectedRows === 0) {
                res.status(404).send('Projection record not found');
            }
            else {
                res.send(`${projectionId}`);
            }
        }
    });
}
function checkDeleteFile(idProj) {
    const sql = `SELECT graph FROM projection WHERE id_proj = ?`;
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
exports.default = router;
