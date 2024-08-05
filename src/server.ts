import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import marketRoutes from "./routes/market";
import opcommentRoutes from "./routes/opcomment";
import operationRoutes from "./routes/operation";
import pcommentRoutes from "./routes/pcomment";
import projectionRoutes from "./routes/projection";
import statusRoutes from "./routes/status";
import symbolRoutes from "./routes/symbol";

import { QueryError } from "mysql2";
import mysqlConnection from "./config/db";

const app = express();
app.use(compression());

// Configuring express server
app.use(bodyParser.json());
app.use(cors());

// Expose routes
app.use("/projections", projectionRoutes);
app.use("/symbols", symbolRoutes);
app.use("/statuses", statusRoutes);
app.use("/markets", marketRoutes);
app.use("/pcomments", pcommentRoutes);
app.use("/operations", operationRoutes);
app.use("/opcomments", opcommentRoutes);

app.get("/pull", (req: any, res: any) => {
  const id = req.query.id;
  const updatedAtUnix = parseFloat(req.query.updatedAt);
  const batchSize = parseInt(req.query.batchSize, 10);
  const updatedAtParsed = new Date(updatedAtUnix).toISOString();
  /**
   * Notice that we have to compare the updatedAt AND the id field
   * because the updateAt field is not unique and when two documents have
   * the same updateAt, we can still "sort" them by their id.
   */

  mysqlConnection.query(
    `SELECT * FROM projection WHERE (updated_at > ? OR (updated_at = ? AND id_proj > ?)) ORDER BY updated_at, id_proj LIMIT ?`,
    [updatedAtParsed, updatedAtParsed, id, batchSize],
    (err: QueryError | null, rows: any[], fields: any) => {
      if (!err) {
        const documents = rows;
        const lastDocument = documents[documents.length - 1];
        const newCheckpoint =
          documents.length === 0
            ? { id, updatedAtParsed }
            : {
                id: lastDocument.id,
                updatedAt: lastDocument.updatedAt,
              };

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ documents, checkpoint: newCheckpoint }));
      } else console.log(err);
    }
  );
});

export default app;
