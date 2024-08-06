const Server_Receive = require("../../Server_RecSend/Server_Receive.js");
const { RecSend_Message } = require("../../Server_RecSend/RecSend_Message.js");
const Change_PW = require("../../etc/Change_HashPW.js");
const sockets = require("../../sockets.js");

exports.ChangePW_Server = async function (socket, formData) {
  const key = await sockets.MakeHash_Server();
  const HashPW = await Change_PW.Change_HashPW(formData.PW, key.key);

  const UserData = {
    ID: formData.ID,
    PW: HashPW,
    Hash: key,
  };

  var ChangePW_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.ChangePW_Message
  );

  return ChangePW_Server_Result;
};
