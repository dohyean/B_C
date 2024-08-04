const { global_value } = require("../../temp/global_value.js");
const Check_BlogSave = require("./Check_BlogSave.js");

exports.BlogSave = async function (db, io, UserData) {
  var BlogSave_Result;
  switch (await Check_BlogSave.Check_BlogSave(db, UserData).return_result_num) {
    case global_value.Return_Insert_Error:
      BlogSave_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      BlogSave_Result = global_value.All_Complete;
      break;
    default:
      BlogSave_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogSave", {
    BlogSave_Result: BlogSave_Result,
  });
};
