// 서버 데이터 전송
function Send_Make_Hash(socket) {
  return new Promise((resolve, reject) => {
    socket.emit("Send Make Hash", {});
    resolve(0);
  });
}

// 서버 메시지 수신
exports.Rec_Make_Hash = async function (socket) {
  await Send_Make_Hash(socket);
  return new Promise((resolve, reject) => {
    socket.on("Receive Make Hash", (message) => {
      resolve(message);
    });
  });
};
