const express = require("express");
const app = express();
const PORT = 3001;

const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

http.listen(PORT, () => {
  console.log(`app listening on port : ${PORT}`);
});

const Open_DBMS = require("./module/SQL/Open_Close_DBMS/Open_DBMS.js");
const Close_DBMS = require("./module/SQL/Open_Close_DBMS/Close_DBMS.js");
// const s = require("./module/SQL/CRUD_Query/Select_DBMS.js");

io.on("connection", (socket) => {
  const db = Open_DBMS.open_dbms();

  // sql test
  // socket.on("sql_select test", (item) => {
  //   var data = [2];
  //   s.sql_select(db, "User_ID", "User_Data", "User_ID", data);
  //   s.sql_select(db, "*", "User_Data");
  // });

  socket.on("Send SingUp", (item) => {
    const SiginUp = require("./module/SQL/Function/SignUp.js");
    SiginUp.UserData_Save(db, io, item);
  });

  socket.on("Send FindID", (item) => {
    const FindID = require("./module/SQL/Function/FindID.js");
    FindID.FindID(db, io, item);
  });

  socket.on("disconnect", () => {
    Close_DBMS.close_dbms(db);
  });
});
