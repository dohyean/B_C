const FindPW_Server_Send = require("./FindPW_Server_Send.js");

// 서버 메시지 수신
exports.Rec_FindPW = async function (socket, data) {
  await FindPW_Server_Send.Send_FindPW(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive FindPW", (message) => {
      resolve(message);
    });
  });
};
