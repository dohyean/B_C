// 서버 데이터 전송
exports.Send_FindID = function (socket, data) {
  return new Promise((resolve, reject) => {
    socket.emit("Send FindID", {
      PhoneNum: data.Phone,
    });
    resolve(0);
  });
};
