const { global_value } = require("../../../temp/global_value.js");
const Check_CategoryDelete = require("./Check_CategoryDelete.js");

exports.CategoryDelete = async function (db, io, UserData) {
  var CategoryDelete_Result;
  switch (
    await Check_CategoryDelete.Check_CategoryDelete(db, UserData)
      .return_result_num
  ) {
    case global_value.Return_Insert_Error:
      CategoryDelete_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      CategoryDelete_Result = global_value.All_Complete;
      break;
    default:
      CategoryDelete_Result = global_value.Other_Error;
      break;
  }
  io.emit("Receive BlogCategoryDelete", {
    CategoryDelete_Result: CategoryDelete_Result,
  });
};
