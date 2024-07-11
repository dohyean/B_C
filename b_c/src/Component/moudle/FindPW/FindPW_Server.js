// 서버 데이터 전송
function Send_FindPW(socket, data) {
    return new Promise((resolve, reject) => {
      socket.emit("Send FindPW", {
        ID : data.ID,
        PhoneNum: data.Phone,
      });
      resolve(0);
    });
  }
  
  // 서버 메시지 수신
  exports.Rec_FindPW = async function (socket, data) {
    await Send_FindPW(socket, data);
    return new Promise((resolve, reject) => {
      socket.on("Receive FindPW", (message) => {
        resolve(message);
      });
    });
  };
  