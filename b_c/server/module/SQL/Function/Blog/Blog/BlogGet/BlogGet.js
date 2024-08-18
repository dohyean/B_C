const { global_value } = require("../../../temp/global_value.js");
const Check_BlogGet = require("./Check_BlogGet.js");

exports.BlogGet = async function (db, io, UserData) {
  var BlogGet_Result;
  switch (await Check_BlogGet.Check_BlogGet(db, UserData).return_result_num) {
    case global_value.Return_Update_Error:
      BlogGet_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      BlogGet_Result = global_value.All_Complete;
      break;
    default:
      BlogGet_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogGet", {
    BlogGet_Result: BlogGet_Result,
  });
};
