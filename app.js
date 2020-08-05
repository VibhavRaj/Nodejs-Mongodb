const express = require("express");
const app = express();
const morgan = require("morgan");
// Api imported
const alllist = require("./api/routes/list");

app.use(morgan("dev"));
// Routes which handles the request
app.use("/list", alllist);

module.exports = app;
