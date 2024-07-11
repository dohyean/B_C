const Select_DBMS = require("../CRUD_Query/Select_DBMS.js");
const Insert_DBMS = require("../CRUD_Query/Insert_DBMS.js");
const All_Complete = 0; // 모든 조건 만족 & 데이터 저장
const Fail = 1; // 실패
const Error = 2; // 문법 오류
const Other_Error = 3; // 이외의 오류

const Return_FindPW_Error = 0; // 패스워드 찾기 문법 오류
const Return_FindPW_Undefined = 1; // 패스워드가 없는 경우 (실패)
const Return_FindPW_Match = 2; // 패스워드가 있는 경우 (성공)

async function Check_FindPW(db, UserData) {
  var Check_FindPW_Result = await Select_DBMS.sql_select(
    db,
    "User_PW",
    "User_Data",
    "User_ID = ? AND User_PhoneNum = ?",
    UserData
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_FindPW_Result);
  });
}

exports.FindPW = async function (db, io, UserData) {
  var FindPW_Result;
  var User_Data = [UserData.ID, UserData.PhoneNum]
  var Check_FindPW_Result = await Check_FindPW(db, User_Data);
  switch (Check_FindPW_Result.return_result_num) {
    case Return_FindPW_Error:
        FindPW_Result = {
        FindPW_return_result: "err",
        FindPW_return_result_num: Error,
      };
      break;
    case Return_FindPW_Undefined:
        FindPW_Result = {
        FindPW_return_result: "",
        FindPW_return_result_num: Fail,
      };
      break;
    case Return_FindPW_Match:
        FindPW_Result = {
        FindPW_return_result: Check_FindPW_Result.return_result,
        FindPW_return_result_num: All_Complete,
      };
      break;
    default:
        FindPW_Result = {
        FindPW_return_result: "err",
        FindPW_return_result_num: Other_Error,
      };
      break;
  }

  io.emit("Receive FindPW", {
    FindPW_Result: FindPW_Result,
  });
};
