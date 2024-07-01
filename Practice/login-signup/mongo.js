const mongoose = require("mongoose");

//mongoose
//  .connect("mongodb://localhost:27017/")
//  .then(() => {
//    console.log("MongoDB Connected");
//  })
//  .catch(() => {
//    console.log("MongoDB Connection Failed");
//  });

mongoose.connect("mongodb://127.0.0.1:27017/Entertainment");
const db = mongoose.connection;
db.on("open", () => {
  console.log("Connected");
});
db.on("error", () => {
  console.log("Not Connected");
});

const newSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const users = mongoose.model("users", newSchema);

module.exports = users;
