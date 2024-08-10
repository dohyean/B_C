const Server_Receive = require("../../../Server_RecSend/Server_Receive.js");
const {
  RecSend_Message,
} = require("../../../Server_RecSend/RecSend_Message.js");

exports.PostCreate_Server = async function (socket, formData) {
  const UserData = {
    // 이후 프론트에서 넘어오는 formData 구조 확인 후 변경
    // Blog_ID: formData.Blog_ID,
    Category_ID: "5",
    Post_Title: "test",
    Post_Content: "test",
    Post_Visibility_Status: 0,
  };

  var PostCreate_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.BlogPostCreate_Message
  );

  return PostCreate_Server_Result;
};
