const Insert_DBMS = require("../../../../CRUD_Query/Insert_DBMS.js");

exports.Check_CommentCreate = async function (db, UserData) {
  var column = ["Post_ID", "User_ID", "Comment", "Comment_Visibility_Status"];
  var dataset = [
    UserData.UserData.Post_ID,
    UserData.UserData.User_ID,
    UserData.UserData.Comment,
    UserData.UserData.Comment_Visibility_Status,
  ];

  var CommentCreate_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "Blog_Comment_Data",
    column,
    dataset
  );
  return CommentCreate_Result;
};
