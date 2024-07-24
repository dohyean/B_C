const Update_DBMS = require("../../CRUD_Query/Update_DBMS.js");
const { global_value } = require("../temp/global_value.js");

async function Check_ChangePW(db, ID, PW) {
  var column = ["User_PW"];
  var column_data = [PW];
  var where = ["User_ID"];
  var where_data = [ID];
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

async function Check_ChangeHash(db, ID, Hash) {
  var column = ["User_Hash"];
  var column_data = [Hash];
  var where = ["User_ID"];
  var where_data = [ID];
  var Check_ChangeHash_Result = await Update_DBMS.Update_DBMS(
    db,
    "Hash_Data",
    column,
    column_data,
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_ChangeHash_Result);
  });
}

exports.ChangePW = async function (db, io, UserData) {
  var ChangePW_Result;
  var Check_ChangePW_Result = await Check_ChangePW(
    db,
    UserData.ID,
    UserData.PW
  );
  switch (Check_ChangePW_Result.return_result_num) {
    case global_value.Return_Update_Error:
      ChangePW_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      var Check_ChangeHash_Result = await Check_ChangeHash(
        db,
        UserData.ID,
        UserData.Hash.key
      );
      switch (Check_ChangeHash_Result.return_result_num) {
        case global_value.Return_Update_Error:
          ChangePW_Result = global_value.Error;
          break;
        case global_value.Return_Update_Success:
          ChangePW_Result = global_value.All_Complete;
          break;
        default:
          ChangePW_Result = global_value.Other_Error;
          break;
      }
      break;
    default:
      ChangePW_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive ChangePW", {
    ChangePW_Result: ChangePW_Result,
  });
};
