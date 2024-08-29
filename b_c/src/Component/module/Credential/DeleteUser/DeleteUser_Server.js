const Server_Receive = require("../../Server_RecSend/Server_Receive.js");
const { RecSend_Message } = require("../../Server_RecSend/RecSend_Message.js");

exports.DeleteUser_Server = async function (socket, formData) {
  const UserData = { ID: formData.ID };
  alert(UserData.ID);

  var Delete_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.DeleteUser_Message
  );
  return Delete_Server_Result;
};
