const Server_Receive = require("../Server_RecSend/Server_Receive.js");
const { RecSend_Message } = require("../Server_RecSend/RecSend_Message.js");
const Change_PW = require("../etc/Change_HashPW.js");

exports.Login_Server = async function (socket, formData) {
  const HashPW = await Change_PW.Change_HashPW(formData.PW, formData.key);
  const UserData = {
    ID: formData.ID,
    PW: HashPW,
  };

  var Login_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.Login_Message
  );

  return new Promise((resolve, reject) => {
    resolve(Login_Server_Result);
  });
};
