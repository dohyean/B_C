const express = require("express");
const app = express();
const PORT = 8080;

const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

http.listen(PORT, () => {
  console.log(`app listening on port : ${PORT}`);
});

const Open_DBMS = require("./module/SQL/Open_Close_DBMS/Open_DBMS.js");
const Close_DBMS = require("./module/SQL/Open_Close_DBMS/Close_DBMS.js");

io.on("", (socket) => {
  // 서버 연결
  const db = Open_DBMS.open_dbms();

  socket.on("User Data", (item) => {});

  Close_DBMS.close_dbms(db);
});
