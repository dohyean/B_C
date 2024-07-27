// const io = require("socket.io-client");
// const socket = io("https://localhost:3001");

// async function SignUp_Server(formData) {
//   const SignUp = require("./SignUp/SignUp_Server.js");
//   var return_data = await SignUp.SignUp_Server(socket, formData);
//   return return_data;
// }

// async function FindID_Server(formData) {
//   const FindID = require("./FindID/FindID_Server.js");
//   var return_data = await FindID.FindID_Server(socket, formData);
//   return return_data;
// }

// async function FindPW_Server(formData) {
//   const FindPW = require("./FindPW/FindPW_Server.js");
//   var return_data = await FindPW.FindPW_Server(socket, formData);
//   return return_data;
// }

// async function ChangePW_Server(formData) {
//   const ChangePW = require("./ChangePW/ChangePW_Server.js");
//   var return_data = await ChangePW.ChangePW_Server(socket, formData);
//   return return_data;
// }

// async function MakeHash_Server() {
//   const MakeHash = require("./etc/MakeHash_Server.js");
//   var return_data = await MakeHash.MakeHash_Server(socket);
//   return return_data;
// }

// async function GetHash_Server(formData) {
//   const GetHash = require("./etc/GetHash_Server.js");
//   var return_data = await GetHash.GetHash_Server(socket, formData);
//   return return_data;
// }

// async function Login_Server(formData) {
//   const Login = require("./Login/Login_Server.js");
//   var return_data = await Login.Login_Server(socket, formData);
//   return return_data;
// }

// function Disconnect() {
//   return new Promise((resolve, reject) => {
//     socket.emit("dis");
//     resolve(0);
//   });
// }

// module.exports = {
//   SignUp_Server,
//   FindID_Server,
//   FindPW_Server,
//   ChangePW_Server,
//   MakeHash_Server,
//   GetHash_Server,
//   Login_Server,
//   Disconnect,
// };

const io = require("socket.io-client");

let socket = null;

function connectSocket() {
  return new Promise((resolve, reject) => {
    if (!socket || !socket.connected) {
      socket = io("https://localhost:3001", {
        reconnectionAttempts: 3, // 재연결 시도 횟수
        timeout: 5000, // 연결 시간 제한(ms)
      });

      socket.on("connect", () => {
        console.log("Socket connected!");
        resolve(socket);
      });

      socket.on("connect_error", (error) => {
        console.error("Socket connection error:", error);
        reject(error);
      });
    } else {
      resolve(socket);
    }
  });
}

function disconnectSocket(socket) {
  return new Promise((resolve, reject) => {
    if (socket && socket.connected) {
      socket.disconnect();
      console.log("Socket disconnected successfully");
      resolve(0);
    } else {
      console.log("Socket is not connected");
      resolve(0);
    }
  });
}

async function SignUp_Server(formData) {
  const socket = await connectSocket();
  try {
    const SignUp = require("./SignUp/SignUp_Server.js");
    var return_data = await SignUp.SignUp_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in SignUp_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

async function FindID_Server(formData) {
  const socket = await connectSocket();
  try {
    const FindID = require("./FindID/FindID_Server.js");
    var return_data = await FindID.FindID_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in FindID_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

async function FindPW_Server(formData) {
  const socket = await connectSocket();
  try {
    const FindPW = require("./FindPW/FindPW_Server.js");
    var return_data = await FindPW.FindPW_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in FindPW_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

async function ChangePW_Server(formData) {
  const socket = await connectSocket();
  try {
    const ChangePW = require("./ChangePW/ChangePW_Server.js");
    var return_data = await ChangePW.ChangePW_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in ChangePW_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

async function MakeHash_Server() {
  try {
    const MakeHash = require("./etc/MakeHash_Server.js");
    var return_data = await MakeHash.MakeHash_Server(socket);
    return return_data;
  } catch (err) {
    console.error("err in MakeHash_Server: ", err);
    throw err;
  }
}

async function GetHash_Server(formData) {
  try {
    const GetHash = require("./etc/GetHash_Server.js");
    var return_data = await GetHash.GetHash_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in GetHash_Server: ", err);
    throw err;
  }
}

async function Login_Server(formData) {
  const socket = await connectSocket();
  try {
    const Login = require("./Login/Login_Server.js");
    var return_data = await Login.Login_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in Login_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

module.exports = {
  SignUp_Server,
  FindID_Server,
  FindPW_Server,
  ChangePW_Server,
  MakeHash_Server,
  GetHash_Server,
  Login_Server,
};
