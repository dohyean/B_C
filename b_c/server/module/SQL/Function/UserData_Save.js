const Select_DBMS = require("../CRUD_Query/Select_DBMS.js");
const Insert_DBMS = require("../CRUD_Query/Insert_DBMS.js");
const All_Complete = 0; // 모든 조건 만족 & 데이터 저장
const Duplicate_ID = 1; // ID 중복
const Error = 2;

const Return_Duplicate_Error = 0;
const Return_Duplicate_Undefined = 1;

const Return_UserData_Error = 0;

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
  var UserData_Save_Result;
  var Save_Check_Duplicate_ID = await Check_Duplicate_ID(db, UserData.ID);

  if (Save_Check_Duplicate_ID === Return_Duplicate_Error) {
    UserData_Save_Result = Error;
  } else if (Save_Check_Duplicate_ID === Return_Duplicate_Undefined) {
    var Save_Save_UserData = await Save_UserData(db, UserData);
    if (Save_Save_UserData === Return_UserData_Error) {
      UserData_Save_Result = Error;
    } else {
      UserData_Save_Result = All_Complete;
    }
  } else {
    UserData_Save_Result = Duplicate_ID;
  }
  console.log(UserData_Save_Result);

  io.emit("Receive User Data Save", {
    UserData_Save_Result: UserData_Save_Result,
  });
};
