const express = require("express");
const router = express.Router();
const schema = require("../model/schema");

router.get("/", (request, response) => {
  response.render("../views/home");
});

router.get("/home", (request, response) => {
  response.send("Home component");
});

router.get("/schema", (request, response) => {
  schema.find().then((data) => {
    response.json(data);
  }).catch((err) => {
    return err;
  });
});

module.exports = router;
