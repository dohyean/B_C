const Select_DBMS = require("../../CRUD_Query/Select_DBMS.js");
const Update_DBMS = require("../../CRUD_Query/Update_DBMS.js");
const Insert_DBMS = require("../../CRUD_Query/Insert_DBMS.js");

const { global_value } = require("../temp/global_value.js");

async function Check_Duplicate_ID(db, UserID) {
  var Check_Duplicate_ID_Result = await Select_DBMS.Select_DBMS(
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
  var Save_UserData_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "User_Data",
    column,
    dataset
  );
  return new Promise((resolve, rejects) => {
    resolve(Save_UserData_Result);
  });
}

async function Save_Hash(db, ID, Hash) {
  var column = ["User_Hash"];
  var column_data = [Hash];
  var where = ["User_ID"];
  var where_data = [ID];
  var Check_Save_Hash_Result = await Update_DBMS.Update_DBMS(
    db,
    "Hash_Data",
    column,
    column_data,
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_Save_Hash_Result);
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
          switch (
            await Save_Hash(db, UserData.ID, UserData.Hash.key)
              .return_result_num
          ) {
            case global_value.Return_Update_Error:
              SignUp_Server_Result = global_value.Error;
              break;
            case global_value.Return_Update_Success:
              SignUp_Server_Result = global_value.All_Complete;
              break;
            default:
              SignUp_Server_Result = global_value.Other_Error;
              break;
          }
          SignUp_Server_Result = global_value.All_Complete;
          break;
        default:
          SignUp_Server_Result = global_value.Other_Error;
          break;
      }
      break;
    case global_value.Return_Duplicate_Match:
      SignUp_Server_Result = global_value.Fail;
      break;
    default:
      SignUp_Server_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive SingUp", {
    SignUp_Server_Result: SignUp_Server_Result,
  });
};
