const event = require("events");
//
const eventEmitter = new event.EventEmitter();
//
//
//eventEmitter.on("f1", () => {
//  console.log("Function is executed on the server")
//});
//
//
//eventEmitter.emit("f1");
//

//const connectHandler = () => {
//  console.log("Connection is succesful");
//  eventEmitter.emit("data_received");
//};
//
//eventEmitter.on("connection", connectHandler);
//
//eventEmitter.on("data_received", () => {
//  console.log("Data received succesfully");
//});
//
//eventEmitter.emit("connection");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Entertainment");

const db = mongoose.connection;
db.on("open", () => {
  console.log("Connection is succesful");
});
db.on("error", () => {
  console.log("Connection is unsuccesful");
});

