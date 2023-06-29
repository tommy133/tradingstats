const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const projectionRoutes = require('./routes/projection');

//Configuring express server
app.use(bodyparser.json());
app.use(cors());

//expose routes
app.use('/projections', projectionRoutes);

module.exports = app;