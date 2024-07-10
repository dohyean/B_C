// 서버 데이터 전송
function Send_SignUp(socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send SingUp", {
      ID: data.ID,
      PW: data.PW,
      NickName: data.nickname,
      Name: data.name,
      PhoneNum: data.Phone,
      Birthday: data.Birth,
    });
    resolve(0);
  });
}

// 서버 메시지 수신
exports.Rec_SignUp = async function (socket, data) {
  await Send_SignUp(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive SingUp", (message) => {
      resolve(message);
    });
  });
};
