const Update_DBMS = require("../../CRUD_Query/Update_DBMS.js");
const { global_value } = require("../temp/global_value.js");

async function Check_ChangePW(db, UserData) {
  var column = ["User_PW"];
  var column_data = [UserData.PW];
  var where = ["User_ID"];
  var where_data = ["test"];
  var Check_ChangePW_Result = await Update_DBMS.Update_DBMS(
    db,
    "User_Data",
    column,
    column_data,
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_ChangePW_Result);
  });
}

exports.ChangePW = async function (db, io, UserData) {
  var ChangePW_Result;
  switch (await Check_ChangePW(db, UserData).return_result_num) {
    case global_value.Return_ChangePW_Error:
      ChangePW_Result = global_value.Error;
      break;
    case global_value.Return_ChangePW_Success:
      ChangePW_Result = global_value.All_Complete;
      break;
    default:
      ChangePW_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive ChangePW", {
    ChangePW_Result: ChangePW_Result,
  });
};
