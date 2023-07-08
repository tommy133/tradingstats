import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

const app = express();
app.use(compression());

import projectionRoutes from './routes/projection';
import symbolRoutes from './routes/symbol';
import statusRoutes from './routes/status';

// Configuring express server
app.use(bodyParser.json());
app.use(cors());

// Expose routes
app.use('/projections', projectionRoutes);
app.use('/symbols', symbolRoutes);
app.use('/statuses', statusRoutes);

export default app;
