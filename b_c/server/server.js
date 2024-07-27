const { Server } = require("socket.io");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const fs = require("fs");
const port = 3001;
const https = require("https");
const server = https.createServer(
  {
    key: fs.readFileSync("./key.pem"),
    cert: fs.readFileSync("./cert.pem"),
  },
  app
);
const io = new Server(server, {
  cors: { origin: "https://localhost:3000", methods: ["GET", "POST"] },
});

const Open_DBMS = require("./module/SQL/Open_Close_DBMS/Open_DBMS.js");
const Close_DBMS = require("./module/SQL/Open_Close_DBMS/Close_DBMS.js");

server.listen(port, () => {
  console.log(`서버가 ${port}에서 실행 중입니다.`);
});

io.on("connection", (socket) => {
  const db = Open_DBMS.open_dbms();

  // 회원가입
  socket.on("Send SignUp", (item) => {
    const SiginUp = require("./module/SQL/Function/SignUp/SignUp.js");
    SiginUp.UserData_Save(db, io, item);
  });

  // 회원가입시 hash 생성
  socket.on("Send MakeHash", (item) => {
    const SendHash = require("./module/SQL/Function/etc/Make_Hash.js");
    SendHash.Make_Hash(io);
  });

  // 아이디 찾기
  socket.on("Send FindID", (item) => {
    const FindID = require("./module/SQL/Function/FindID/FindID.js");
    FindID.FindID(db, io, item);
  });

  // 비밀번호 찾기
  socket.on("Send FindPW", (item) => {
    const FindPW = require("./module/SQL/Function/FindPW/FindPW.js");
    FindPW.FindPW(db, io, item);
  });

  // 비밀번호 변경
  socket.on("Send ChangePW", (item) => {
    const ChangePW = require("./module/SQL/Function/ChangePW/ChangePW.js");
    ChangePW.ChangePW(db, io, item);
  });

  socket.on("Send Login", (item) => {
    const Login = require("./module/SQL/Function/Login/Login.js");
    Login.Login(db, io, item);
  });
  socket.on("Send GetHash", (item) => {
    const GetHash = require("./module/SQL/Function/etc/GetHash.js");
    GetHash.GetHash(db, io, item);
  });

  socket.on("disconnect", () => {
    Close_DBMS.close_dbms(db);
  });
});
