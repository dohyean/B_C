const Insert_DBMS = require("../../../CRUD_Query/Insert_DBMS.js");

exports.Check_BlogPostSave = async function (db, UserData) {
  var column = [
    "Blog_ID",
    "Post_Title",
    "Post_Content",
    "Post_Visibility_Status",
  ];
  var dataset = [
    UserData.UserData.Blog_ID,
    UserData.UserData.Post_Title,
    UserData.UserData.Post_Content,
    UserData.UserData.Post_Visibility_Status,
  ];
  var BlogPostSave_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "Blog_Post_Data",
    column,
    dataset
  );
  return BlogPostSave_Result;
};
