const SignUp_Server_Send = require("./SignUp_Server_Send.js");

// 서버 메시지 수신
exports.Rec_SignUp = async function (socket, data) {
  await SignUp_Server_Send.Send_SignUp(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive SingUp", (message) => {
      resolve(message);
    });
  });
};
