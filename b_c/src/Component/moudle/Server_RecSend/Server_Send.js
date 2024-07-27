// 서버 데이터 전송
exports.Server_Send = async function (socket, UserData, message) {
  return new Promise((resolve, reject) => {
    socket.emit(message.Send, {
      UserData: UserData,
    });
    resolve(0);
  });
};
