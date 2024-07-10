const Select_DBMS = require("../CRUD_Query/Select_DBMS.js");
const Insert_DBMS = require("../CRUD_Query/Insert_DBMS.js");
const All_Complete = 0; // 모든 조건 만족 & 데이터 저장
const Fail = 1; // 실패
const Error = 2; // 문법 오류
const Other_Error = 3; // 이외의 오류

const Return_FindID_Error = 0; // 아이디 찾기 문법 오류
const Return_FindID_Undefined = 1; // 아이디가 없는 경우 (실패)
const Return_FindID_Match = 2; // 아이디가 있는 경우 (성공)

async function Check_FindID(db, Phone) {
  var Check_FindID_Result = await Select_DBMS.sql_select(
    db,
    "User_ID",
    "User_Data",
    "User_PhoneNum = ?",
    Phone
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_FindID_Result);
  });
}

exports.FindID = async function (db, io, UserData) {
  var FindID_Result;
  var Check_FindID_Result = await Check_FindID(db, UserData.PhoneNum);
  switch (Check_FindID_Result.return_result_num) {
    case Return_FindID_Error:
      FindID_Result = {
        FindID_return_result: "err",
        FindID_return_result_num: Error,
      };
      break;
    case Return_FindID_Undefined:
      FindID_Result = {
        FindID_return_result: "",
        FindID_return_result_num: Fail,
      };
      break;
    case Return_FindID_Match:
      FindID_Result = {
        FindID_return_result: Check_FindID_Result.return_result,
        FindID_return_result_num: All_Complete,
      };
      break;
    default:
      FindID_Result = {
        FindID_return_result: "err",
        FindID_return_result_num: Other_Error,
      };
      break;
  }

  io.emit("Receive FindID", {
    FindID_Result: FindID_Result,
  });
};
