const { global_value } = require("../../../temp/global_value.js");
const Check_CommentDelete = require("./Check_CommentDelete.js");

exports.CommentDelete = async function (db, io, UserData) {
  var CommentDelete_Result;
  switch (
    await Check_CommentDelete.Check_CommentDelete(db, UserData)
      .return_result_num
  ) {
    case global_value.Return_Insert_Error:
      CommentDelete_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      CommentDelete_Result = global_value.All_Complete;
      break;
    default:
      CommentDelete_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogCommentDelete", {
    CommentDelete_Result: CommentDelete_Result,
  });
};
