const express = require("express");
const users = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await users.findOne({ email: email, password: password });

    if (check) {
      res.json("Exists");
    } else {
      res.json("Does not exist");
    }
  } catch (error) {
    res.json("Error");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = { email: email, password: password };

  try {
    const check = await users.findOne({ email: email });

    if (check) {
      res.json("Exists");
    } else {
      res.json("Does not exist");
      await users.insertMany([data]);
    }
  } catch (error) {
    console.log(error);
    res.json("Error");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
