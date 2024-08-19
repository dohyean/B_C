const { global_value } = require("../../../temp/global_value.js");
const Check_CommentGet = require("./Check_CommentGet.js");

exports.CommentGet = async function (db, io, UserData) {
  var CommentGet_Result;
  switch (
    await Check_CommentGet.Check_CommentGet(db, UserData).return_result_num
  ) {
    case global_value.Return_Update_Error:
      CommentGet_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      CommentGet_Result = global_value.All_Complete;
      break;
    default:
      CommentGet_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogCommentGet", {
    CommentGet_Result: CommentGet_Result,
  });
};
