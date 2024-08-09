const Server_Receive = require("../../Server_RecSend/Server_Receive.js");
const { RecSend_Message } = require("../../Server_RecSend/RecSend_Message.js");

exports.BlogSave_Server = async function (socket, formData) {
  const UserData = {
    // 이후 프론트에서 넘어오는 formData 구조 확인 후 변경
    ID: formData.ID,
    Blog_Name: formData.Blog_Name,
    Blog_Description: formData.Blog_Description,
    Blog_Visibility_Status: formData.Blog_Visibility_Status,
  };

  var BlogSave_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.BlogSave_Message
  );

  return BlogSave_Server_Result;
};
