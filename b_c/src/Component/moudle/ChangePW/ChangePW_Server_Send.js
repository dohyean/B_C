const Change_PW = require("../etc/Change_HashPW.js");
const sockets = require("../sockets.js");

// 서버 데이터 전송
exports.Send_ChangePW = async function (socket, data) {
  const key = await sockets.Make_Hash_Server();
  const HashPW = await Change_PW.Change_HashPW(data.PW, key.key);
  return new Promise((resolve, reject) => {
    socket.emit("Send ChangePW", {
      ID: data.ID,
      PW: HashPW,
      Hash: key,
    });
    resolve(0);
  });
};
