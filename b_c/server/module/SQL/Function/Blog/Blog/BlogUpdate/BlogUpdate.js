const { global_value } = require("../../../temp/global_value.js");
const Check_BlogUpdate = require("./Check_BlogUpdate.js");

exports.BlogUpdate = async function (db, io, UserData) {
  var BlogUpdate_Result;
  switch (
    await Check_BlogUpdate.Check_BlogUpdate(db, UserData).return_result_num
  ) {
    case global_value.Return_Update_Error:
      BlogUpdate_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      BlogUpdate_Result = global_value.All_Complete;
      break;
    default:
      BlogUpdate_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogUpdate", {
    BlogUpdate_Result: BlogUpdate_Result,
  });
};
