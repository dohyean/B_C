const Server_Receive = require("../../../Server_RecSend/Server_Receive.js");
const {
  RecSend_Message,
} = require("../../../Server_RecSend/RecSend_Message.js");

exports.CategoryCreate_Server = async function (socket, formData) {
  const UserData = {
    // 이후 프론트에서 넘어오는 formData 구조 확인 후 변경
    // Blog_ID: formData.Blog_ID,
    Blog_ID: 3,
    Category_Name: "category_name",
    Category_PID: "",
    Category_Child_Num: 0,
  };

  var CategoryCreate_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.BlogCategoryCreate_Message
  );

  return CategoryCreate_Server_Result;
};
