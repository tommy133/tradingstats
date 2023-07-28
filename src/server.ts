import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

const app = express();
app.use(compression());

import projectionRoutes from './routes/projection';
import symbolRoutes from './routes/symbol';
import statusRoutes from './routes/status';
import pcommentRoutes from './routes/pcomment';
import fileRoutes from './routes/file';
import operationRoutes from './routes/operation';
import opcommentRoutes from './routes/opcomment';

// Configuring express server
app.use(bodyParser.json());
app.use(cors());

// Expose routes
app.use('/projections', projectionRoutes);
app.use('/symbols', symbolRoutes);
app.use('/statuses', statusRoutes);
app.use('/pcomment', pcommentRoutes);
app.use('/file', fileRoutes);
app.use('/operations', operationRoutes);
app.use('/opcomment', opcommentRoutes);

export default app;
