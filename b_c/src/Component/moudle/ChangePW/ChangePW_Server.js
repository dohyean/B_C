// 서버 데이터 전송
function Send_ChangePW(socket, data) {
    console.log("test: " + data.PW);
    return new Promise((resolve, reject) => {
      socket.emit("Send ChangePW", {
        PW: data.PW,
      });
      resolve(0);
    });
  }
  
  // 서버 메시지 수신
  exports.Rec_ChangePW = async function (socket, data) {
    await Send_ChangePW(socket, data);
    return new Promise((resolve, reject) => {
      socket.on("Receive ChangePW", (message) => {
        resolve(message);
      });
    });
  };
  