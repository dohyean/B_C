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
    SiginUp.SignUp(db, io, item);
  });

  // 회원가입시 hash 생성
  socket.on("Send MakeHash", (item) => {
    const SendHash = require("./module/SQL/Function/HashModule/MakeHash/MakeHash.js");
    SendHash.MakeHash(io);
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

  // 로그인
  socket.on("Send Login", (item) => {
    const Login = require("./module/SQL/Function/Login/Login.js");
    Login.Login(db, io, item);
  });

  // 해시 데이터 획득
  socket.on("Send GetHash", (item) => {
    const GetHash = require("./module/SQL/Function/HashModule/GetHash/GetHash.js");
    GetHash.GetHash(db, io, item);
  });

  // 유저 데이터 삭제 (프론트 구현 x)
  socket.on("Send DeleteUser", (item) => {
    const DeleteUser = require("./module/SQL/Function/DeleteUser/DeleteUser.js");
    DeleteUser.DeleteUser(db, io, item);
  });

  // 블로그 생성
  socket.on("Send BlogSave", (item) => {
    const BlogSave = require("./module/SQL/Function/Blog/BlogSave/BlogSave.js");
    BlogSave.BlogSave(db, io, item);
  });

  socket.on("disconnect", () => {
    Close_DBMS.close_dbms(db);
  });
});
