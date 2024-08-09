const { global_value } = require("../../../temp/global_value.js");
const Check_BlogDelete = require("./Check_BlogDelete.js");

exports.BlogDelete = async function (db, io, UserData) {
  var BlogDelete_Result;
  switch (
    await Check_BlogDelete.Check_BlogDelete(db, UserData).return_result_num
  ) {
    case global_value.Return_Insert_Error:
      BlogDelete_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      BlogDelete_Result = global_value.All_Complete;
      break;
    default:
      BlogDelete_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogDelete", {
    BlogDelete_Result: BlogDelete_Result,
  });
};
