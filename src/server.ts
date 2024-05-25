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

export default app;
