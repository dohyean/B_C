const { global_value } = require("../temp/global_value.js");
const { Check_FindPW } = require("./Check_FindPW.js");

exports.FindPW = async function (db, io, UserData) {
  var FindPW_Result;
  var User_Data = [UserData.UserData.ID, UserData.UserData.PhoneNum];
  var Check_FindPW_Result = await Check_FindPW(db, User_Data);
  switch (Check_FindPW_Result.return_result_num) {
    case global_value.Return_Select_Error:
      FindPW_Result = {
        FindPW_return_result: "err",
        FindPW_return_result_num: global_value.Error,
      };
      break;
    case global_value.Return_Select_Undefined:
      FindPW_Result = {
        FindPW_return_result: "fail",
        FindPW_return_result_num: global_value.Fail,
      };
      break;
    case global_value.Return_Select_Match:
      FindPW_Result = {
        FindPW_return_result: Check_FindPW_Result.return_result,
        FindPW_return_result_num: global_value.All_Complete,
      };
      break;
    default:
      FindPW_Result = {
        FindPW_return_result: "other err",
        FindPW_return_result_num: global_value.Other_Error,
      };
      break;
  }

  io.emit("Receive FindPW", {
    FindPW_Result: FindPW_Result,
  });
};
