const Insert_DBMS = require("../../../CRUD_Query/Insert_DBMS.js");

exports.Check_BlogSave = async function (db, UserData) {
  var column = [
    "User_ID",
    "Blog_Name",
    "Blog_Description",
    "Blog_Visibility_Status",
  ];
  var dataset = [
    UserData.UserData.ID,
    UserData.UserData.Blog_Name,
    UserData.UserData.Blog_Description,
    UserData.UserData.Blog_Visibility_Status,
  ];
  var BlogSave_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "Blog_Data",
    column,
    dataset
  );
  return BlogSave_Result;
};
