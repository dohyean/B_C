const { global_value } = require("../../../temp/global_value.js");
const Check_PostUpdate = require("./Check_PostUpdate.js");

exports.PostUpdate = async function (db, io, UserData) {
  var PostUpdate_Result;
  switch (
    await Check_PostUpdate.Check_PostUpdate(db, UserData).return_result_num
  ) {
    case global_value.Return_Update_Error:
      PostUpdate_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      PostUpdate_Result = global_value.All_Complete;
      break;
    default:
      PostUpdate_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogPostUpdate", {
    PostUpdate_Result: PostUpdate_Result,
  });
};
