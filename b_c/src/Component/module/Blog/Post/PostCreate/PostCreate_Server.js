const Server_Receive = require("../../../Server_RecSend/Server_Receive.js");
const {
  RecSend_Message,
} = require("../../../Server_RecSend/RecSend_Message.js");

exports.PostCreate_Server = async function (socket, blogData) {
  const UserData = {
    Category_ID: "6",
    Post_Title: blogData.title,
    Post_Content: blogData.content,
    Post_Visibility_Status: blogData.visibility,
  };

  var PostCreate_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.BlogPostCreate_Message
  );

  return PostCreate_Server_Result;
};
