//database connection

import * as dotenv from "dotenv";
import { createConnection } from "mysql2";

dotenv.config();

const mysqlConnection = createConnection({
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
