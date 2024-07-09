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
  var Check_Find_ID_Result = await Select_DBMS.sql_select(
    db,
    "User_ID",
    "User_Data",
    "User_Phone = ?",
    Phone
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_Find_ID_Result);
  });
}

exports.FindID = async function (db, io, Phone) {
  var FindID_Result;
  var save = await Check_FindID(db, Phone);
  switch (save.return_result_num) {
    case Return_FindID_Error:
      FindID_Result = Error;
      break;
    case Return_FindID_Undefined:
      FindID_Result = Fail;
      break;
    case Return_FindID_Match:
      FindID_Result = All_Complete;
      break;
    default:
      FindID_Result = Other_Error;
      break;
  }

  io.emit("Receive Find ID", {
    FindID_Result: FindID_Result,
  });
};
