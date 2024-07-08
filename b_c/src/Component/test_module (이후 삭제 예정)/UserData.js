function Send_User_Data(socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send User Data Save", {
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
exports.Rec_User_Data = async function (socket, data) {
  await Send_User_Data(socket, data);
  return new Promise((resolve, reject) => {
    socket.on("Receive User Data Save", (message) => {
      resolve(message);
    });
  });
};
