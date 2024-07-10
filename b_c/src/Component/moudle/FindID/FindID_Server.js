// 서버 데이터 전송
function Send_FindID(socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send FindID", {
      PhoneNum: data.Phone,
    });
    resolve(0);
  });
}

// 서버 메시지 수신
exports.Rec_FindID = async function (socket, data) {
  await Send_FindID(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive FindID", (message) => {
      resolve(message);
    });
  });
};
