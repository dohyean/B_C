const Insert_DBMS = require("../../../../CRUD_Query/Insert_DBMS.js");

exports.Check_PostCreate = async function (db, UserData) {
  var column = [
    "Category_ID",
    "Post_Title",
    "Post_Content",
    "Post_Visibility_Status",
  ];
  var dataset = [
    UserData.UserData.Category_ID,
    UserData.UserData.Post_Title,
    UserData.UserData.Post_Content,
    UserData.UserData.Post_Visibility_Status,
  ];
  var PostCreate_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "Blog_Post_Data",
    column,
    dataset
  );
  return PostCreate_Result;
};
