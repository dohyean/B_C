const Server_Receive = require("../../Server_RecSend/Server_Receive.js");
const { RecSend_Message } = require("../../Server_RecSend/RecSend_Message.js");
const Change_PW = require("../../etc/Change_HashPW.js");
const sockets = require("../../sockets.js");

exports.SignUp_Server = async function (socket, formData) {
  const key = await sockets.MakeHash_Server();
  const HashPW = await Change_PW.Change_HashPW(formData.PW, key.key);

  const UserData = {
    ID: formData.ID,
    PW: HashPW,
    NickName: formData.nickname,
    Name: formData.name,
    PhoneNum: formData.Phone,
    Birthday: formData.Birth,
    Hash: key,
  };

  var SignUp_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.SignUp_Message
  );

  return new Promise((resolve, reject) => {
    resolve(SignUp_Server_Result);
  });
};
