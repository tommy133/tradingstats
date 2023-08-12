"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../config/db"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    db_1.default.query(`SELECT * FROM opcomment`, (err, rows) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    });
});
router.get('/:id', (req, res) => {
    db_1.default.query(`SELECT * FROM opcomment
    WHERE id_op = ?`, [req.params.id], (err, rows) => {
        if (!err)
            res.json(rows[0]);
        else
            console.log(err);
    });
});
router.post('/', (req, res) => {
    const { opcomment, id_op } = req.body;
    const sql = 'INSERT INTO opcomment (opcomment, id_op) VALUES (?, ?)';
    db_1.default.query(sql, [opcomment, id_op], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error inserting operation comment record');
        }
        else {
            res.send(`${result.insertId}`);
        }
    });
});
router.put('/:id', (req, res) => {
    const { opcomment } = req.body;
    const id = req.params.id;
    const sql = `UPDATE opcomment SET opcomment=? WHERE id_opc = ?`;
    db_1.default.query(sql, [opcomment, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error updating operation comment record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Operation comment record not found');
        }
        else {
            res.send(`${id}`);
        }
    });
});
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM opcomment WHERE id_op = ?';
    db_1.default.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting operation comment record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Operation comment record not found');
        }
        else {
            res.send(`${req.params.id}`);
        }
    });
});
exports.default = router;
