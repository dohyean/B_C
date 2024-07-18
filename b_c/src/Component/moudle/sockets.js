const io = require("socket.io-client");
const socket = io("https://localhost:3001");

function Disconnect() {
  return new Promise((resolve, reject) => {
    socket.emit("dis");
    resolve(0);
  });
}

async function SignUp_Server(formData) {
  const SignUp = require("./SignUp/SignUp_Server.js");
  var SignUp_Server_Result = await SignUp.Rec_SignUp(socket, formData);
  Disconnect();
  return new Promise((resolve, reject) => {
    resolve(SignUp_Server_Result);
  });
}

async function FindID_Server(formData) {
  const FindID = require("./FindID/FindID_Server.js");
  var FindID_Server_Result = await FindID.Rec_FindID(socket, formData);
  Disconnect();
  return new Promise((resolve, reject) => {
    resolve(FindID_Server_Result);
  });
}

async function FindPW_Server(formData) {
  const FindPW = require("./FindPW/FindPW_Server.js");
  var FindPW_Server_Result = await FindPW.Rec_FindPW(socket, formData);
  Disconnect();
  return new Promise((resolve, reject) => {
    resolve(FindPW_Server_Result);
  });
}

async function SendHash_Server() {
  const SendHash = require("./etc/SendHash_Server.js");
  var SendHash_Server_Result = await SendHash.Rec_SendHash(socket);
  Disconnect();
  return new Promise((resolve, reject) => {
    resolve(SendHash_Server_Result);
  });
}




module.exports = {
  SignUp_Server,
  FindID_Server,
  FindPW_Server,
  SendHash_Server
};
