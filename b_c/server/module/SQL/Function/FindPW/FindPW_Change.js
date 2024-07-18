const Update_DBMS = require("../../CRUD_Query/Update_DBMS.js");
const { global_value } = require("../temp/global_value.js");

async function Check_FindPW_Change(db, UserData) {
  var column = [];
  var column_data = [];
  var where = [];
  var where_data = [];
  var Check_FindPW_Result = await Update_DBMS.Update_DBMS(
    db,
    "User_Data",
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_FindPW_Result);
  });
}

exports.FindPW_Change = async function (db, io, UserData) {
  var FindPW_Change_Result;
  var User_Data = [UserData.ID, UserData.PhoneNum]
  var Check_FindPW_Result = await Check_FindPW_Change(db, User_Data);
  switch (Check_FindPW_Result.return_result_num) {
    case global_value.Return_FindPW_Error:
        FindPW_Result = {
        FindPW_return_result: "err",
        FindPW_return_result_num: global_value.Error,
      };
      break;
    case global_value.Return_FindPW_Undefined:
        FindPW_Result = {
        FindPW_return_result: "",
        FindPW_return_result_num: global_value.Fail,
      };
      break;
    case global_value.Return_FindPW_Match:
        FindPW_Result = {
        FindPW_return_result: Check_FindPW_Result.return_result,
        FindPW_return_result_num: global_value.All_Complete,
      };
      break;
    default:
        FindPW_Result = {
        FindPW_return_result: "err",
        FindPW_return_result_num: global_value.Other_Error,
      };
      break;
  }

  io.emit("Receive FindPW", {
    FindPW_Result: FindPW_Result,
  });
};
