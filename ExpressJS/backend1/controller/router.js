const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("../views/home.ejs");
});

router.get("/home", (request, response) => {
  response.send("Home component");
});

module.exports = router;