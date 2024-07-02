const express = require("express");
const router = express.Router();
const User = require("../models/usersSchema");
const multer = require("multer");

// image upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldName + "_" + Date.now() + "_" + file.originalname);
  },
});

// middleware
var upload = multer({
  storage: storage,
}).single("image");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
});

router.get("/add", (req, res) => {
  res.render("add_users", { title: "Add Users" });
});

module.exports = router;
