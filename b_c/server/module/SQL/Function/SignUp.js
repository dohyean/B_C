const Select_DBMS = require("../CRUD_Query/Select_DBMS.js");
const Insert_DBMS = require("../CRUD_Query/Insert_DBMS.js");
const All_Complete = 0; // 모든 조건 만족 & 데이터 저장
const Duplicate_ID = 1; // ID 중복
const Error = 2; // 문법 오류
const Other_Error = 3; // 이외의 오류

const Return_Duplicate_Error = 0; // ID 중복 시 문법 오류
const Return_Duplicate_Undefined = 1; // 중복된 ID가 없는 경우 (성공)
const Return_Duplicate_Match = 2; // 중복된 ID가 있는 경우 (실패)

const Return_UserData_Error = 0; // 유저 데이터 저장 문법 오류
const Return_UserData_Success = 1; // 유저 데이터 저장 성공

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
    case Return_Duplicate_Error:
      SignUp_Server_Result = Error;
      break;
    case Return_Duplicate_Undefined:
      switch (await Save_UserData(db, UserData)) {
        case Return_UserData_Error:
          SignUp_Server_Result = Error;
          break;
        case Return_UserData_Success:
          SignUp_Server_Result = All_Complete;
          break;
        default:
          SignUp_Server_Result = Other_Error;
          break;
      }
      break;
    case Return_Duplicate_Match:
      SignUp_Server_Result = Duplicate_ID;
      break;
    default:
      SignUp_Server_Result = Other_Error;
      break;
  }

  io.emit("Receive SingUp", {
    SignUp_Server_Result: SignUp_Server_Result,
  });
};
