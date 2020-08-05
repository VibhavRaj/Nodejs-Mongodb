const express = require("express");
const app = express();
const morgan = require("morgan");
// Api imported
const alllist = require("./api/routes/list");

app.use(morgan("dev"));
// Routes which handles the request
app.use("/list", alllist);

// Error Handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
