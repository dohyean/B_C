// 서버 데이터 전송
function Send_SendHash(socket) {
    return new Promise((resolve, reject) => {
      socket.emit("Send SendHash", {});
      resolve(0);
    });
  }
  
  // 서버 메시지 수신
  exports.Rec_SendHash = async function (socket) {
    await Send_SendHash(socket);
    return new Promise((resolve, reject) => {
      socket.on("Receive SendHash", (message) => {
        resolve(message);
      });
    });
  };
  