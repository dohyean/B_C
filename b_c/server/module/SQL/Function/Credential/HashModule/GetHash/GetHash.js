const { global_value } = require("../../../temp/global_value.js");
const { Check_GetHash } = require("./Check_GetHash.js");

exports.GetHash = async function (db, io, UserData) {
  var GetHash_Result;
  const Check_FindPW_Result = await Check_GetHash(db, UserData.UserData.ID);
  switch (Check_FindPW_Result.return_result_num) {
    case global_value.Return_Select_Error:
      GetHash_Result = {
        GetHash_return_result: "err",
        GetHash_return_result_num: global_value.Error,
      };
      break;
    case global_value.Return_Select_Undefined:
      GetHash_Result = {
        GetHash_return_result: "",
        GetHash_return_result_num: global_value.Fail,
      };
      break;
    case global_value.Return_Select_Match:
      GetHash_Result = {
        GetHash_return_result: Check_FindPW_Result.return_result,
        GetHash_return_result_num: global_value.All_Complete,
      };
      break;
    default:
      GetHash_Result = {
        GetHash_return_result: "err",
        GetHash_return_result_num: global_value.Other_Error,
      };
      break;
  }

  io.emit("Receive GetHash", {
    GetHash_Result: GetHash_Result,
  });
};
