const { global_value } = require("../../../temp/global_value.js");
const Check_CommentCreate = require("./Check_CommentCreate.js");

exports.CommentCreate = async function (db, io, UserData) {
  var CommentCreate_Result;
  switch (
    await Check_CommentCreate.Check_CommentCreate(db, UserData)
      .return_result_num
  ) {
    case global_value.Return_Insert_Error:
      CommentCreate_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      CommentCreate_Result = global_value.All_Complete;
      break;
    default:
      CommentCreate_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive CommentCreate", {
    CommentCreate_Result: CommentCreate_Result,
  });
};
