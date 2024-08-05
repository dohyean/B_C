const { global_value } = require("../../temp/global_value.js");
const Check_CategoryCreate = require("./Check_CategoryCreate.js");

exports.CategoryCreate = async function (db, io, UserData) {
  var CategoryCreate_Result;
  switch (
    await Check_CategoryCreate.Check_CategoryCreate(db, UserData)
      .return_result_num
  ) {
    case global_value.Return_Insert_Error:
      CategoryCreate_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      CategoryCreate_Result = global_value.All_Complete;
      break;
    default:
      CategoryCreate_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive CategoryCreate", {
    CategoryCreate_Result: CategoryCreate_Result,
  });
};
