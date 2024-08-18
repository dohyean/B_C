const { Server } = require("socket.io");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const fs = require("fs");
const port = 3001;
const https = require("https");
require("dotenv").config();
const server = https.createServer(
  {
    key: fs.readFileSync(process.env.SSL_KEY_FILE),
    cert: fs.readFileSync(process.env.SSL_CRT_FILE),
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
    const SiginUp = require("./module/SQL/Function/Credential/SignUp/SignUp.js");
    SiginUp.SignUp(db, io, item);
  });

  // 회원가입시 hash 생성
  socket.on("Send MakeHash", (item) => {
    const SendHash = require("./module/SQL/Function/Credential/HashModule/MakeHash/MakeHash.js");
    SendHash.MakeHash(io);
  });

  // 아이디 찾기
  socket.on("Send FindID", (item) => {
    const FindID = require("./module/SQL/Function/Credential/FindID/FindID.js");
    FindID.FindID(db, io, item);
  });

  // 비밀번호 찾기
  socket.on("Send FindPW", (item) => {
    const FindPW = require("./module/SQL/Function/Credential/FindPW/FindPW.js");
    FindPW.FindPW(db, io, item);
  });

  // 비밀번호 변경
  socket.on("Send ChangePW", (item) => {
    const ChangePW = require("./module/SQL/Function/Credential/ChangePW/ChangePW.js");
    ChangePW.ChangePW(db, io, item);
  });

  // 로그인
  socket.on("Send Login", (item) => {
    const Login = require("./module/SQL/Function/Credential/Login/Login.js");
    Login.Login(db, io, item);
  });

  // 해시 데이터 획득
  socket.on("Send GetHash", (item) => {
    const GetHash = require("./module/SQL/Function/Credential/HashModule/GetHash/GetHash.js");
    GetHash.GetHash(db, io, item);
  });

  // 유저 데이터 삭제 (프론트 미구현)
  socket.on("Send DeleteUser", (item) => {
    const DeleteUser = require("./module/SQL/Function/Credential/DeleteUser/DeleteUser.js");
    DeleteUser.DeleteUser(db, io, item);
  });

  // 블로그 생성 (프론트 미구현)
  socket.on("Send BlogCreate", (item) => {
    const BlogCreate = require("./module/SQL/Function/Blog/Blog/BlogCreate/BlogCreate.js");
    BlogCreate.BlogCreate(db, io, item);
  });

  // 블로그 삭제 (프론트 미구현)
  socket.on("Send BlogDelete", (item) => {
    const BlogDelete = require("./module/SQL/Function/Blog/Blog/BlogDelete/BlogDelete.js");
    BlogDelete.BlogDelete(db, io, item);
  });

  // 블로그 수정 (프론트 미구현 - 테스트 미완)
  socket.on("Send BlogUpdate", (item) => {
    const BlogUpdate = require("./module/SQL/Function/Blog/Blog/BlogUpdate/BlogUpdate.js");
    BlogUpdate.BlogUpdate(db, io, item);
  });

  socket.on("Send BlogGet", (item) => {
    const BlogGet = require("./module/SQL/Function/Blog/Blog/BlogGet/BlogGet.js");
    BlogGet.BlogGet(db, io, item);
  });

  // 블로그 게시물 생성 (프론트)
  socket.on("Send BlogPostCreate", (item) => {
    const PostCreate = require("./module/SQL/Function/Blog/Post/PostCreate/PostCreate.js");
    PostCreate.PostCreate(db, io, item);
  });

  // 블로그 게시물 삭제 (프론트 미구현)
  socket.on("Send BlogPostDelete", (item) => {
    const PostDelete = require("./module/SQL/Function/Blog/Post/PostDelete/PostDelete.js");
    PostDelete.PostDelete(db, io, item);
  });

  // 블로그 게시물 수정 (프론트 미구현)
  socket.on("Send BlogPostUpdate", (item) => {
    const PostUpdate = require("./module/SQL/Function/Blog/Post/PostUpdate/PostUpdate.js");
    PostUpdate.PostUpdate(db, io, item);
  });

  // 블로그 카테고리 생성 (프론트 미구현)
  socket.on("Send BlogCategoryCreate", (item) => {
    const CategoryCreate = require("./module/SQL/Function/Blog/Category/CategoryCreate/CategoryCreate.js");
    CategoryCreate.CategoryCreate(db, io, item);
  });

  // 블로그 카테고리 삭제 (프론트 미구현)
  socket.on("Send BlogCategoryDelete", (item) => {
    const CategoryDelete = require("./module/SQL/Function/Blog/Category/CategoryDelete/CategoryDelete.js");
    CategoryDelete.CategoryDelete(db, io, item);
  });

  // 블로그 카테고리 수정 (프론트 미구현 - 테스트 미완)
  socket.on("Send BlogCategoryUpdate", (item) => {
    const CategoryUpdate = require("./module/SQL/Function/Blog/Category/CategoryUpdate/CategoryUpdate.js");
    CategoryUpdate.CategoryUpdate(db, io, item);
  });

  // 블로그 게시판 댓글 생성 (프론트 미구현)
  socket.on("Send BlogCommentCreate", (item) => {
    const CommentCreate = require("./module/SQL/Function/Blog/Comment/CommentCreate/CommentCreate.js");
    CommentCreate.CommentCreate(db, io, item);
  });

  // 블로그 게시판 댓글 삭제 (프론트 미구현)
  socket.on("Send BlogCommentDelete", (item) => {
    const CommentDelete = require("./module/SQL/Function/Blog/Comment/CommentDelete/CommentDelete.js");
    CommentDelete.CommentDelete(db, io, item);
  });

  //test용 이후 삭제 예정
  socket.on("Send test", (item) => {
    console.log("test");
    console.log(item);
    const save = item;
    console.log(save);
  });

  socket.on("disconnect", () => {
    Close_DBMS.close_dbms(db);
  });
});
