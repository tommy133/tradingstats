"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./../config/db"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    db_1.default.query(`SELECT status.id_st, status.name_st FROM 
    status`, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});
router.get('/:id', (req, res) => {
    db_1.default.query(`SELECT status.id_st, status.name_st FROM status
    WHERE id_st = ?`, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});
exports.default = router;
