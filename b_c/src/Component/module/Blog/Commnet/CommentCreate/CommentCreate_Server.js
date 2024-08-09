const Server_Receive = require("../../../Server_RecSend/Server_Receive.js");
const {
  RecSend_Message,
} = require("../../../Server_RecSend/RecSend_Message.js");

exports.CommentCreate_Server = async function (socket, formData) {
  const UserData = {
    // 이후 프론트에서 넘어오는 formData 구조 확인 후 변경
    Post_ID: formData.Post_ID,
    User_ID: formData.User_ID,
    Comment: formData.Comment,
    Comment_Visibility_Status: formData.Comment_Visibility_Status,
  };

  var CategoryCrate_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.BlogCommentCreate_Message
  );

  return CategoryCrate_Server_Result;
};
