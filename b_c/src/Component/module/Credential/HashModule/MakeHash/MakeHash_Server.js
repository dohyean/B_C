const Server_Receive = require("../../../Server_RecSend/Server_Receive.js");
const {
  RecSend_Message,
} = require("../../../Server_RecSend/RecSend_Message.js");

exports.MakeHash_Server = async function (socket) {
  const UserData = {};

  var MakeHash_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.MakeHash_Message
  );

  return new Promise((resolve, reject) => {
    resolve(MakeHash_Server_Result);
  });
};
