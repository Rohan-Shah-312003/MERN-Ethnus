//const one = require("./one");
//one.msg();
//one.err();

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server is running on port 9000");
  res.end("Welcome to backend devlopement");
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
