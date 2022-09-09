// import express
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// create an express app
const app = express();

// use middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
// middleware function
const logger = (req, res, next) => {
  console.log("Logging...");
  next();
};

// routes
app.get("/users", logger, (req, res) => {
  res.send("Users");
});
app.post("/users", logger, (req, res) => {
  console.log("body", req.body);
  res.send("add user");
});

// initialize the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
