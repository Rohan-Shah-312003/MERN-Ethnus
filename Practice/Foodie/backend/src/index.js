const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/users");
const recipesRouter = require("./routes/recipes");

const app = express();

// middlewares

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://rohan312003:293195@cluster0.m4uomfl.mongodb.net/recipes?retryWrites=true&w=majority&appName=Cluster0"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("DB Connected");
});

db.on("error", () => {
  console.log("DB not conneted");
});

app.listen(5500, () => {
  console.log("server started at port 5500");
});
