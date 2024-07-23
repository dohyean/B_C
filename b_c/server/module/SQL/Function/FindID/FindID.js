const Select_DBMS = require("../../CRUD_Query/Select_DBMS.js");
const { global_value } = require("../temp/global_value.js");

async function Check_FindID(db, Phone) {
  var Check_FindID_Result = await Select_DBMS.Select_DBMS(
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
    case global_value.Return_FindID_Error:
      FindID_Result = {
        FindID_return_result: "err",
        FindID_return_result_num: global_value.Error,
      };
      break;
    case global_value.Return_FindID_Undefined:
      FindID_Result = {
        FindID_return_result: "",
        FindID_return_result_num: global_value.Fail,
      };
      break;
    case global_value.Return_FindID_Match:
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
