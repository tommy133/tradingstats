const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const app = express();
app.use(compression())

const projectionRoutes = require('./routes/projection');

//Configuring express server
app.use(bodyparser.json());
app.use(cors());

//expose routes
app.use('/projections', projectionRoutes);

module.exports = app;