const { global_value } = require("../../../temp/global_value.js");
const Check_CategoryUpdate = require("./Check_CategoryUpdate.js");

exports.CategoryUpdate = async function (db, io, UserData) {
  var CategoryUpdate_Result;
  switch (
    await Check_CategoryUpdate.Check_CategoryUpdate(db, UserData)
      .return_result_num
  ) {
    case global_value.Return_Update_Error:
      CategoryUpdate_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      CategoryUpdate_Result = global_value.All_Complete;
      break;
    default:
      CategoryUpdate_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogCategoryUpdate", {
    CategoryUpdate_Result: CategoryUpdate_Result,
  });
};
