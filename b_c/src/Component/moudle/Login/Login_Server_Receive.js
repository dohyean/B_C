const Login_Server_Send = require("./Login_Server_Send.js");

// 서버 메시지 수신
exports.Rec_Login = async function (socket, data) {
  await Login_Server_Send.Send_Login(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive Login", (message) => {
      resolve(message);
    });
  });
};
