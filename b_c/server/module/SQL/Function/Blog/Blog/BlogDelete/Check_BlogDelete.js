const Delete_DBMS = require("../../../../CRUD_Query/Delete_DBMS.js");

exports.Check_BlogDelete = async function (db, UserData) {
  var Check_BlogDelete_Result = await Delete_DBMS.Delete_DBMS(
    db,
    "Blog_Data",
    "Blog_ID = ?",
    UserData.UserData.Blog_ID
  );
  return Check_BlogDelete_Result.return_result_num;
};
