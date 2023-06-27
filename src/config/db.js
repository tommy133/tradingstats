//database connection

const mysql = require("mysql");

let mysqlConnection = mysql.createConnection({
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
