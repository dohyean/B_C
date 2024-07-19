const Select_DBMS = require("../CRUD_Query/Select_DBMS.js");
const Insert_DBMS = require("../CRUD_Query/Insert_DBMS.js");

const { global_value } = require("./temp/global_value.js");

async function Check_Duplicate_ID(db, UserID) {
  var Check_Duplicate_ID_Result = await Select_DBMS.sql_select(
    db,
    "User_ID",
    "User_Data",
    "User_ID = ?",
    UserID
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_Duplicate_ID_Result.return_result_num);
  });
}

async function Save_UserData(db, UserData) {
  var column = [
    "User_ID",
    "User_PW",
    "User_NickName",
    "User_Name",
    "User_PhoneNum",
    "User_Birthday",
  ];
  var dataset = [
    UserData.ID,
    UserData.PW,
    UserData.NickName,
    UserData.Name,
    UserData.PhoneNum,
    UserData.Birthday,
  ];
  var Save_UserData_Result = await Insert_DBMS.sql_insert(
    db,
    "User_Data",
    column,
    dataset
  );
  return new Promise((resolve, rejects) => {
    resolve(Save_UserData_Result);
  });
}

exports.UserData_Save = async function (db, io, UserData) {
  var SignUp_Server_Result;
  switch (await Check_Duplicate_ID(db, UserData.ID)) {
    case global_value.Return_Duplicate_Error:
      SignUp_Server_Result = global_value.Error;
      break;
    case global_value.Return_Duplicate_Undefined:
      switch (await Save_UserData(db, UserData)) {
        case global_value.Return_UserData_Error:
          SignUp_Server_Result = global_value.Error;
          break;
        case global_value.Return_UserData_Success:
          SignUp_Server_Result = global_value.All_Complete;
          break;
        default:
          SignUp_Server_Result = global_value.Other_Error;
          break;
      }
      break;
    case global_value.Return_Duplicate_Match:
      SignUp_Server_Result = global_value.Duplicate_ID;
      break;
    default:
      SignUp_Server_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive SingUp", {
    SignUp_Server_Result: SignUp_Server_Result,
  });
};
