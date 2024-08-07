const { global_value } = require("../../../temp/global_value.js");
const Check_PostDelete = require("./Check_PostDelete.js");

exports.PostDelete = async function (db, io, UserData) {
  var PostDelete_Result;
  switch (
    await Check_PostDelete.Check_PostDelete(db, UserData).return_result_num
  ) {
    case global_value.Return_Insert_Error:
      PostDelete_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      PostDelete_Result = global_value.All_Complete;
      break;
    default:
      PostDelete_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive PostDelete", {
    PostDelete_Result: PostDelete_Result,
  });
};
