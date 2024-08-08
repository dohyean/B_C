const Delete_DBMS = require("../../../../CRUD_Query/Delete_DBMS.js");

exports.Check_PostDelete = async function (db, UserData) {
  var Check_PostDelete_Result = await Delete_DBMS.Delete_DBMS(
    db,
    "Blog_Post_Data",
    "Post_ID = ?",
    UserData.UserData.Post_ID
  );
  return Check_PostDelete_Result.return_result_num;
};
