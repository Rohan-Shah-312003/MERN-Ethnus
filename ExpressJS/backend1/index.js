const express = require("express");
const router = require("./controller/router");
const app = express();


app.use("/routes", router);

app.listen(5000, () => {
  console.log("Application is running in the port 5000");
});
