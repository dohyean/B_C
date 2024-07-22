// 서버 데이터 전송
function Send_Login(socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send Login", {
      ID: data.ID,
      PhoneNum: data.Phone,
    });
    resolve(0);
  });
}

// 서버 메시지 수신
exports.Rec_Login = async function (socket, data) {
  await Send_Login(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive Login", (message) => {
      resolve(message);
    });
  });
};
