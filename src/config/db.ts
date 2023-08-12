//database connection

import mysql from 'mysql';
import * as dotenv from "dotenv";

dotenv.config();

const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });
  
  mysqlConnection.connect((err: any) => {
    if (!err) console.log("Connection Established Successfully");
    else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
  });

  export default mysqlConnection;
