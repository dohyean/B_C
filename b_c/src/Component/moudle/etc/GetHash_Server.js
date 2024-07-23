// 서버 데이터 전송
function Send_GetHash(socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send GetHash", {
      ID: data.ID,
    });
    resolve(0);
  });
}

// 서버 메시지 수신
exports.Rec_GetHash = async function (socket, data) {
  await Send_GetHash(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive GetHash", (message) => {
      resolve(message);
    });
  });
};
