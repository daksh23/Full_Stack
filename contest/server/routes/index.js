const express = require("express");
const app = express.Router();
const logRoutes = require("./logroutes");

// create route
app.use("/log", logRoutes);

module.exports = app;