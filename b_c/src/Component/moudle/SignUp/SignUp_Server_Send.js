const Change_PW = require("../etc/Change_HashPW.js");
const sockets = require("../sockets.js");

// 서버 데이터 전송
exports.Send_SignUp = async function (socket, data) {
  const key = await sockets.Make_Hash_Server();
  const HashPW = await Change_PW.Change_HashPW(data.PW, key.key);
  return new Promise((resolve, reject) => {
    socket.emit("Send SingUp", {
      ID: data.ID,
      PW: HashPW,
      NickName: data.nickname,
      Name: data.name,
      PhoneNum: data.Phone,
      Birthday: data.Birth,
      Hash: key,
    });
    resolve(0);
  });
};
