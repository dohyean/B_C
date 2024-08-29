const { global_value } = require("../../temp/global_value.js");
const { Check_Login } = require("./Check_Login.js");

exports.Login = async function (db, io, UserData) {
  var Login_Result;
  var Check_Login_Result = await Check_Login(db, UserData.UserData);
  switch (Check_Login_Result.return_result_num) {
    case global_value.Return_Select_Error:
      Login_Result = {
        result: "err",
        result_num: global_value.Error,
      };
      break;
    case global_value.Return_Select_Undefined:
      Login_Result = {
        result: "",
        result_num: global_value.Fail,
      };
      break;
    case global_value.Return_Select_Match:
      Login_Result = {
        result: Check_Login_Result.return_result,
        result_num: global_value.All_Complete,
      };
      break;
    default:
      Login_Result = {
        result: "other err",
        result_num: global_value.Other_Error,
      };
      break;
  }

  io.emit("Receive Login", {
    Login_Result: Login_Result,
  });
};
