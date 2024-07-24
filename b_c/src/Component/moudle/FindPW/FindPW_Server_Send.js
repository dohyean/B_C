// 서버 데이터 전송
exports.Send_FindPW = function (socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send FindPW", {
      ID: data.ID,
      PhoneNum: data.Phone,
    });
    resolve(0);
  });
};
