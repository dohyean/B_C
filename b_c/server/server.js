const express = require("express");
const path = require("path");
const app = express();

const http = require("http").createServer(app);

http.listen(8080, () => {
  console.log("Listening on 8080");
});
