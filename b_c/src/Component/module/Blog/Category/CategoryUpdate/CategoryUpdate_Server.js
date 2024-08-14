const Server_Receive = require("../../../Server_RecSend/Server_Receive.js");
const {
  RecSend_Message,
} = require("../../../Server_RecSend/RecSend_Message.js");

exports.CategoryUpdate_Server = async function (socket, formData) {
  const UserData = {
    // 이후 프론트에서 넘어오는 formData 구조 확인 후 변경
    Category_ID: 6,
    Category_Name: "update test",
    Category_PID: undefined,
  };

  var CategoryUpdate_Server_Result = await Server_Receive.Server_Receive(
    socket,
    UserData,
    RecSend_Message.BlogCategoryUpdate_Message
  );

  return CategoryUpdate_Server_Result;
};
