const Select_DBMS = require("../../CRUD_Query/Select_DBMS.js");
const { global_value } = require("../temp/global_value.js");

async function Check_Login(db, UserData) {
  const Data = [UserData.ID, UserData.PW];
  const Check_FindID_Result = await Select_DBMS.Select_DBMS(
    db,
    "User_ID, User_NickName",
    "User_Data",
    "User_ID = ? and User_PW = ?",
    Data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_FindID_Result);
  });
}

exports.Login = async function (db, io, UserData) {
  var Login_Result;
  var Check_Login_Result = await Check_Login(db, UserData);
  switch (Check_Login_Result.return_result_num) {
    case global_value.Return_FindID_Error:
      Login_Result = global_value.Error;
      break;
    case global_value.Return_FindID_Undefined:
      Login_Result = global_value.Fail;
      break;
    case global_value.Return_FindID_Match:
      Login_Result = global_value.All_Complete;
      break;
    default:
      Login_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive Login", {
    Login_Result: Login_Result,
  });
};
