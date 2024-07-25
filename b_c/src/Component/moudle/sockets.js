const io = require("socket.io-client");
const socket = io("https://localhost:3001");

async function SignUp_Server(formData) {
  const SignUp = require("./SignUp/SignUp_Server.js");
  var return_data = await SignUp.SignUp_Server(socket, formData);
  return return_data;
}

async function FindID_Server(formData) {
  const FindID = require("./FindID/FindID_Server.js");
  var return_data = await FindID.FindID_Server(socket, formData);
  return return_data;
}

async function FindPW_Server(formData) {
  const FindPW = require("./FindPW/FindPW_Server.js");
  var return_data = await FindPW.FindPW_Server(socket, formData);
  return return_data;
}

async function ChangePW_Server(formData) {
  const ChangePW = require("./ChangePW/ChangePW_Server.js");
  var return_data = await ChangePW.ChangePW_Server(socket, formData);
  return return_data;
}

async function MakeHash_Server() {
  const MakeHash = require("./etc/MakeHash_Server.js");
  var return_data = await MakeHash.MakeHash_Server(socket);
  return return_data;
}

async function GetHash_Server(formData) {
  const GetHash = require("./etc/GetHash_Server.js");
  var return_data = await GetHash.GetHash_Server(socket, formData);
  return return_data;
}

async function Login_Server(formData) {
  const Login = require("./Login/Login_Server.js");
  var return_data = await Login.Login_Server(socket, formData);
  return return_data;
}

function Disconnect() {
  return new Promise((resolve, reject) => {
    socket.emit("dis");
    resolve(0);
  });
}

module.exports = {
  SignUp_Server,
  FindID_Server,
  FindPW_Server,
  ChangePW_Server,
  MakeHash_Server,
  GetHash_Server,
  Login_Server,
  Disconnect,
};
