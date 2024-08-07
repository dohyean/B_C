const Server_Receive = require("../../Server_RecSend/Server_Receive.js");
const { RecSend_Message } = require("../../Server_RecSend/RecSend_Message.js");

exports.FindPW_Server = async function (socket, formData) {
  const User_Data = {
    ID: formData.ID,
    PhoneNum: formData.Phone,
  };

  var FindPW_Server_Result = await Server_Receive.Server_Receive(
    socket,
    User_Data,
    RecSend_Message.FindPW_Message
  );
  return new Promise((resolve, reject) => {
    resolve(FindPW_Server_Result);
  });
};
