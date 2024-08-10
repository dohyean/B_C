const { global_value } = require("../../../temp/global_value.js");
const Check_BlogCreate = require("./Check_BlogCreate.js");

exports.BlogCreate = async function (db, io, UserData) {
  var BlogCreate_Result;
  switch (
    await Check_BlogCreate.Check_BlogCreate(db, UserData).return_result_num
  ) {
    case global_value.Return_Insert_Error:
      BlogCreate_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      BlogCreate_Result = global_value.All_Complete;
      break;
    default:
      BlogCreate_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogCreate", {
    BlogCreate_Result: BlogCreate_Result,
  });
};
