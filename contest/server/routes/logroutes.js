const express = require("express");
const app = express.Router();
const logController = require('../controllers/logController')

// api/log..
app.post("/addlog", logController.addLog);

app.get("/list", logController.getList);

module.exports = app;
