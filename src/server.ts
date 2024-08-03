import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import { Collection, Document, MongoClient } from "mongodb";
import marketRoutes from "./routes/market";
import opcommentRoutes from "./routes/opcomment";
import operationRoutes from "./routes/operation";
import pcommentRoutes from "./routes/pcomment";
import projectionRoutes from "./routes/projection";
import statusRoutes from "./routes/status";
import symbolRoutes from "./routes/symbol";

import { lastOfArray } from "rxdb/plugins/core";

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

let mongoCollection: Collection<Document>;
const func = async () => {
  console.log("Connecting to MongoDB");
  const mongoClient = new MongoClient("mongodb://localhost:27017/");

  const mongoConnection = await mongoClient.connect();
  console.log("CONNECTION " + mongoConnection);

  const mongoDatabase = mongoConnection.db("db_tstats");
  mongoCollection = await mongoDatabase.collection("projections");
  console.log("Connected to MongoDB");
};

func().catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/pull", async (req: any, res: any) => {
  console.log("Received request to /pull");
  const id = req.query.id;
  const updatedAt = parseFloat(req.query.updatedAt);
  try {
    const documents = await mongoCollection
      .find({
        $or: [
          {
            updateAt: { $gt: updatedAt },
          },
          {
            updateAt: { $eq: updatedAt },
            id: { $gt: id },
          },
        ],
      })
      .limit(parseInt(req.query.batchSize, 10))
      .toArray();
    const newCheckpoint =
      documents.length === 0
        ? { id, updatedAt }
        : {
            id: lastOfArray(documents)?.id,
            updatedAt: lastOfArray(documents)?.updatedAt,
          };
    console.log("Sending response from /pull");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ documents, checkpoint: newCheckpoint }));
  } catch (error) {
    console.error("Error in /pull:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default app;
