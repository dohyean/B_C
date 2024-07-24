const FindID_Server_Send = require("./FindID_Server_Send.js");

// 서버 메시지 수신
exports.Rec_FindID = async function (socket, data) {
  await FindID_Server_Send.Send_FindID(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive FindID", (message) => {
      resolve(message);
    });
  });
};
