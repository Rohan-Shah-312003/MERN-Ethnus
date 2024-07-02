require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const { urlencoded } = require("express");
const router = require("./controller/router");

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;

db.on("open", () => {
  console.log("DB Connected");
});

db.on("error", () => {
  console.log("DB Connection Failed");
});

// middlewares
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    saveUnintialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// set template engine
app.set("view engine", "ejs");


// routes
app.use("", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
