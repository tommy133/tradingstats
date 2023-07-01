"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../config/db"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    db_1.default.query(`SELECT symbol.name_sym, projection.updown, projection.date_proj, projection.graph, projection.name_tf, status.name_st
    FROM projection
    JOIN symbol ON projection.id_sym = symbol.id_sym
    JOIN status ON projection.id_st = status.id_st`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});
router.get('/:id', (req, res) => {
    db_1.default.query(`SELECT symbol.name_sym, projection.updown, projection.date_proj, projection.graph, projection.name_tf, status.name_st
    FROM projection
    JOIN symbol ON projection.id_sym = symbol.id_sym
    JOIN status ON projection.id_st = status.id_st
    WHERE id_proj = ?`, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
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
            res.send(`Projection record added with ID: ${result.insertId}`);
        }
    });
});
router.put('/:id', (req, res) => {
    const { updown, date_proj, graph } = req.body;
    const sql = 'UPDATE projection SET updown = ?, date_proj = ?, graph = ? WHERE id_proj = ?';
    db_1.default.query(sql, [updown, date_proj, graph, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error updating projection record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Projection record not found');
        }
        else {
            res.send(`Projection record updated with ID: ${req.params.id}`);
        }
    });
});
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM projection WHERE id_proj = ?';
    db_1.default.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting projection record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Projection record not found');
        }
        else {
            res.send(`Projection record deleted with ID: ${req.params.id}`);
        }
    });
});
exports.default = router;
