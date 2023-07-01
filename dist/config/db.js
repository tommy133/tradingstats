"use strict";
//database connection
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
let mysqlConnection = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_tstats",
    multipleStatements: true,
});
mysqlConnection.connect((err) => {
    if (!err)
        console.log("Connection Established Successfully");
    else
        console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});
exports.default = mysqlConnection;
