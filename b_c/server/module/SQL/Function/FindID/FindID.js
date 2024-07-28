const { global_value } = require("../temp/global_value.js");
const { Check_FindID } = require("./Check_FindID.js");

exports.FindID = async function (db, io, UserData) {
  var FindID_Result;
  var Check_FindID_Result = await Check_FindID(db, UserData.UserData.PhoneNum);
  switch (Check_FindID_Result.return_result_num) {
    case global_value.Return_Select_Error:
      FindID_Result = {
        FindID_return_result: "err",
        FindID_return_result_num: global_value.Error,
      };
      break;
    case global_value.Return_Select_Undefined:
      FindID_Result = {
        FindID_return_result: "",
        FindID_return_result_num: global_value.Fail,
      };
      break;
    case global_value.Return_Select_Match:
      FindID_Result = {
        FindID_return_result: Check_FindID_Result.return_result,
        FindID_return_result_num: global_value.All_Complete,
      };
      break;
    default:
      FindID_Result = {
        FindID_return_result: "err",
        FindID_return_result_num: global_value.Other_Error,
      };
      break;
  }

  io.emit("Receive FindID", {
    FindID_Result: FindID_Result,
  });
};
