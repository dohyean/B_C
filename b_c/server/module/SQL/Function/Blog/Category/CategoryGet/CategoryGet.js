const { global_value } = require("../../../temp/global_value.js");
const Check_CategoryGet = require("./Check_CategoryGet.js");

exports.CategoryGet = async function (db, io, UserData) {
  var CategoryGet_Result;
  switch (
    await Check_CategoryGet.Check_CategoryGet(db, UserData).return_result_num
  ) {
    case global_value.Return_Update_Error:
      CategoryGet_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      CategoryGet_Result = global_value.All_Complete;
      break;
    default:
      CategoryGet_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogCategoryGet", {
    CategoryGet_Result: CategoryGet_Result,
  });
};
