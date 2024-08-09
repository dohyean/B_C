const Server_Receive = require("../../Server_RecSend/Server_Receive.js");
const { RecSend_Message } = require("../../Server_RecSend/RecSend_Message.js");

exports.FindID_Server = async function (socket, formData) {
  const UserData = {
    PhoneNum: formData.Phone,
  };

  var FindID_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.FindID_Message
  );

  return new Promise((resolve, reject) => {
    resolve(FindID_Server_Result);
  });
};
