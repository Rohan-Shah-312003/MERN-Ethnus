const express = require("express");
const schema = require("../model/schema");
const mongoose = require("mongoose");

const router = express.Router();

// using promises for the schema functions (create, find, findByIdAndUpdate, etc) as they are not supported by the latest mongoose versions

// create (post)
router.post("/create-student", (req, res) => {
  schema
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return err;
    });
});

// read (get)
router.get("/", (req, res) => {
  schema
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return err;
    });
});

//update (put)
router
  .route("/update-student/:id")
  .get((req, res) => {
    schema
      .find(mongoose.Types.ObjectId(req.params.id))
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        return err;
      });
  })
  .put((req, res) => {
    schema
      .findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id))
      .then({ $set: req.body })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        return err;
      });
  });

//delete (delete)
router.delete("delete-student/:id", (req, res) => {
  schema
    .findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return err;
    });
});

module.exports = router;
