"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../config/db"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    db_1.default.query(`SELECT * FROM pcomment`, (err, rows) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    });
});
router.get('/:id', (req, res) => {
    db_1.default.query(`SELECT * FROM pcomment
    WHERE id_proj = ?`, [req.params.id], (err, rows) => {
        if (!err)
            res.json(rows[0]);
        else
            console.log(err);
    });
});
router.post('/', (req, res) => {
    const { pcomment, id_proj } = req.body;
    const sql = 'INSERT INTO pcomment (pcomment, id_proj) VALUES (?, ?)';
    db_1.default.query(sql, [pcomment, id_proj], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error inserting projection comment record');
        }
        else {
            res.send(`${result.insertId}`);
        }
    });
});
router.put('/:id', (req, res) => {
    const { pcomment } = req.body;
    const id = req.params.id;
    const sql = `UPDATE pcomment SET pcomment=? WHERE id_pc = ?`;
    db_1.default.query(sql, [pcomment, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error updating projection comment record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Projection comment record not found');
        }
        else {
            res.send(`${id}`);
        }
    });
});
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM pcomment WHERE id_proj = ?';
    db_1.default.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting projection comment record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Projection comment record not found');
        }
        else {
            res.send(`${req.params.id}`);
        }
    });
});
exports.default = router;
