const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: { type: String },
  budget: {type: Number}
}, {
  collection: "Movies"
});

module.exports = mongoose.model("Practice Schema", schema);