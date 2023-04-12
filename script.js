const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
var app = express();
//Configuring express server
app.use(bodyparser.json());
app.use(cors());

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_tstats",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.get("/projections", (req, res) => {
  mysqlConnection.query(
    `SELECT symbol.name_sym, projection.updown, 
  projection.date_proj, projection.graph, projection.name_tf, status.name_st 
  FROM projection JOIN symbol on projection.id_sym = symbol.id_sym 
  JOIN status ON projection.id_st=status.id_st`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

app.get("/projections/:id", (req, res) => {
  mysqlConnection.query(
    `SELECT symbol.name_sym, projection.updown, projection.date_proj, 
    projection.graph, projection.name_tf, status.name_st
FROM projection JOIN symbol on projection.id_sym = symbol.id_sym 
  JOIN status ON projection.id_st=status.id_st WHERE id_proj = ?`,
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

app.post("/projections", (req, res) => {
  const { id_sym, updown, date_proj, graph, name_tf, id_st } = req.body;
  const sql =
    "INSERT INTO projection (id_sym, updown, date_proj, graph, name_tf, id_st) VALUES (?, ?, ?, ?, ?, ?)";
  mysqlConnection.query(
    sql,
    [id_sym, updown, date_proj, graph, name_tf, id_st],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting projection record");
      } else {
        res.send(`Projection record added with ID: ${result.insertId}`);
      }
    }
  );
});

app.put("/projections/:id", (req, res) => {
  const { updown, date_proj, graph } = req.body;
  const sql =
    "UPDATE projection SET updown = ?, date_proj = ?, graph = ? WHERE id_proj = ?";
  mysqlConnection.query(
    sql,
    [updown, date_proj, graph, req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating projection record");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Projection record not found");
      } else {
        res.send(`Projection record updated with ID: ${req.params.id}`);
      }
    }
  );
});

app.delete("/projections/:id", (req, res) => {
  const sql = "DELETE FROM projection WHERE id_proj = ?";
  mysqlConnection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting projection record");
    } else if (result.affectedRows === 0) {
      res.status(404).send("Projection record not found");
    } else {
      res.send(`Projection record deleted with ID: ${req.params.id}`);
    }
  });
});
