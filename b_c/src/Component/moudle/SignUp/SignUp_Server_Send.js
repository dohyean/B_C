const Change_PW = require("./Change_HashPW.js");

// 서버 데이터 전송
exports.Send_SignUp = async function (socket, data) {
  const HashPW = await Change_PW.Change_HashPW(data.PW);
  return new Promise((resolve, reject) => {
    socket.emit("Send SingUp", {
      ID: data.ID,
      PW: HashPW.HashPW,
      NickName: data.nickname,
      Name: data.name,
      PhoneNum: data.Phone,
      Birthday: data.Birth,
      Hash: HashPW.key,
    });
    resolve(0);
  });
};
