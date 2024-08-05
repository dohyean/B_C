const { global_value } = require("../../temp/global_value.js");
const Check_BlogPostSave = require("./Check_BlogPostSave.js");

exports.BlogPostSave = async function (db, io, UserData) {
  var BlogPostSave_Result;
  switch (
    await Check_BlogPostSave.Check_BlogPostSave(db, UserData).return_result_num
  ) {
    case global_value.Return_Insert_Error:
      BlogPostSave_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      BlogPostSave_Result = global_value.All_Complete;
      break;
    default:
      BlogPostSave_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogPostSave", {
    BlogPostSave_Result: BlogPostSave_Result,
  });
};
