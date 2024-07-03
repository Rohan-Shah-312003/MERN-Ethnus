const mongoose = require("mongoose");
const express = require("express");
const router = require("./controller/router")
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  "mongodb+srv://rohan312003:293195@cluster0.6tkfcsv.mongodb.net/schooldb"
);

const db = mongoose.connection;

db.on("open", () => {
  console.log("DB connected");
});

db.on("error", () => {
  console.log("DB connection failed");
});


app.use("/routes", router);

app.listen(4000, () => {
  console.log("Application is running in the port 4000");
});
