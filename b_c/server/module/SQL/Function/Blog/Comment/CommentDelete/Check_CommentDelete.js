const Delete_DBMS = require("../../../../CRUD_Query/Delete_DBMS.js");

exports.Check_CommentDelete = async function (db, UserData) {
  var Check_CommentDelete_Result = await Delete_DBMS.Delete_DBMS(
    db,
    "Blog_Comment_Data",
    "Comment_ID = ?",
    UserData.UserData.Comment_ID
  );
  return Check_CommentDelete_Result.return_result_num;
};
