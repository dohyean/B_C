const Server_Send = require("./Server_Send.js");

// 서버 메시지 수신
exports.Server_Receive = async function (socket, UserData, message) {
  await Server_Send.Server_Send(socket, UserData, message);
  return new Promise((resolve, reject) => {
    socket.on(message.Receive, (message) => {
      resolve(message);
    });
  });
};
