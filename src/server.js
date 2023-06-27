require("config/db.js")

const app = require("express")();
const bodyparser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

//Configuring express server
app.use(bodyparser.json());
app.use(cors());
app.use(routes);

module.exports = app;