"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../config/db"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    db_1.default.query(`SELECT symbol.id_sym, symbol.name_sym, symbol.description, market.name_mkt FROM 
    symbol JOIN market ON symbol.id_mkt = market.id_mkt;`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});
router.get('/:id', (req, res) => {
    db_1.default.query(`SELECT symbol.id_sym, symbol.name_sym, symbol.description, market.name_mkt FROM 
    symbol JOIN market ON symbol.id_mkt = market.id_mkt
    WHERE id_sym = ?`, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});
router.post('/', (req, res) => {
    const { name_sym, description, id_mkt } = req.body;
    const sql = 'INSERT INTO symbol (id_sym, name_sym, description, id_mkt) VALUES (NULL, ?, ?, ?)';
    db_1.default.query(sql, [name_sym, description, id_mkt], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error inserting symbol record');
        }
        else {
            res.send(`${result.insertId}`);
        }
    });
});
router.put('/:id', (req, res) => {
    const { name_sym, description, id_mkt } = req.body;
    const id = req.params.id;
    const sql = 'UPDATE symbol SET name_sym = IFNULL(?, name_sym), description = IFNULL(?, description), id_mkt = IFNULL(?, id_mkt) WHERE id_sym = ?';
    db_1.default.query(sql, [name_sym, description, id_mkt, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error updating symbol record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Symbol record not found');
        }
        else {
            res.send(`${id}`);
        }
    });
});
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM symbol WHERE id_sym = ?';
    db_1.default.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting symbol record');
        }
        else if (result.affectedRows === 0) {
            res.status(404).send('Symbol record not found');
        }
        else {
            res.send(`${req.params.id}`);
        }
    });
});
exports.default = router;
