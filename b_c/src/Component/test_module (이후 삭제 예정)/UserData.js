exports.Send_User_Data = function (socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send User Data Save", {
      ID: data.ID,
      PW: data.PW,
      Nickname: data.nickname,
      Name: data.name,
      Phone: data.Phone,
      Birth: data.Birth,
    });
    resolve(0);
  });
};

// 서버 메시지 수신
exports.Rec_User_Data = function (socket) {
  return new Promise((resolve, reject) => {
    socket.on("Receive User Data Save", (message) => {
      resolve(message);
    });
  });
};
