const { Server } = require('socket.io');
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
const fs = require('fs');
const port = 3001;
const https = require('https');
const server = https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}, app);
const io = new Server(server, { cors: { origin: 'https://localhost:3000', methods: ['GET', 'POST'] } });


const Open_DBMS = require("./module/SQL/Open_Close_DBMS/Open_DBMS.js");
const Close_DBMS = require("./module/SQL/Open_Close_DBMS/Close_DBMS.js");
// const s = require("./module/SQL/CRUD_Query/Select_DBMS.js");

server.listen(port, () => {
  console.log(`Socket.IO 서버가 포트 ${port}에서 실행 중입니다.`);
});

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

  socket.on("Send FindPW", (item) => {
    const FindPW = require("./module/SQL/Function/FindPW.js");
    FindPW.FindPW(db, io, item);
  })

  socket.on("Send SendHash", () => {
    const SendHash = require("./module/SQL/Function/SendHash.js");
    SendHash.SendHash(io);
  });

  socket.on("disconnect", () => {
    Close_DBMS.close_dbms(db);
  });
});
