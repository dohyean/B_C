const ChangePW_Server_Send = require("./ChangePW_Server_Send.js");

// 서버 메시지 수신
exports.Rec_ChangePW = async function (socket, data) {
  await ChangePW_Server_Send.Send_ChangePW(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive ChangePW", (message) => {
      resolve(message);
    });
  });
};
