import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

const app = express();
app.use(compression());

import projectionRoutes from './routes/projection';

// Configuring express server
app.use(bodyParser.json());
app.use(cors());

// Expose routes
app.use('/projections', projectionRoutes);

export default app;
