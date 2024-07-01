const express = require("express");
const router = require("./controller/router");
const mongoose = require("mongoose");
const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/Entertainment");
const db = mongoose.connection;
db.on("open", () => {
  console.log("Connected");
});
db.on("error", () => {
  console.log("Not Connected");
});

app.use("/routes", router);

app.listen(5000, () => {
  console.log("Application is running in the port 5000");
});
