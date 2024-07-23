const Change_PW = require("../etc/Change_HashPW.js");

// 서버 데이터 전송
exports.Send_Login = async function (socket, data) {
  const HashPW = await Change_PW.Change_HashPW(data.PW, data.key);
  return new Promise((resolve, reject) => {
    socket.emit("Send Login", {
      ID: data.ID,
      PW: HashPW,
    });
    resolve(0);
  });
};
