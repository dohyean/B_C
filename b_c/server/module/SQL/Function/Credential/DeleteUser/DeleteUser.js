const { global_value } = require("../../temp/global_value.js");

const Delete_DBMS = require("../../../CRUD_Query/Delete_DBMS.js");

async function Check_DeleteUser(db, UserID) {
  var Check_Delete_User_Result = await Delete_DBMS.Delete_DBMS(
    db,
    "User_Data",
    "User_ID = ?",
    UserID
  );
  return Check_Delete_User_Result.return_result_num;
}

exports.DeleteUser = async function (db, io, UserData) {
  var DeleteUser_Result;
  console.log(UserData);
  switch (await Check_DeleteUser(db, UserData.UserData.ID)) {
    case global_value.Return_Delete_Error:
      DeleteUser_Result = global_value.Error;
      break;
    case global_value.Return_Delete_Success:
      DeleteUser_Result = global_value.All_Complete;
      break;
    default:
      DeleteUser_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive DeleteUser", {
    DeleteUser_Result: DeleteUser_Result,
  });
};
