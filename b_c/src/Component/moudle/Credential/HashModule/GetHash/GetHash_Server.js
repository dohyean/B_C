const Server_Receive = require("../../../Server_RecSend/Server_Receive.js");
const {
  RecSend_Message,
} = require("../../../Server_RecSend/RecSend_Message.js");

exports.GetHash_Server = async function (socket, formData) {
  const UserData = { ID: formData.ID };

  var GetHash_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.GetHash_Message
  );
  return GetHash_Server_Result;
};
