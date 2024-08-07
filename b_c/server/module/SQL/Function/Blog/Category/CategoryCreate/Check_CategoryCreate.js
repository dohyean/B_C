const Insert_DBMS = require("../../../../CRUD_Query/Insert_DBMS.js");

exports.Check_CategoryCreate = async function (db, UserData) {
  var column = [
    "User_ID",
    "Category_Name",
    "Category_PID",
    "Category_ChildNum",
  ];
  var dataset = [
    UserData.UserData.User_ID,
    UserData.UserData.Category_Name,
    UserData.UserData.Category_PID,
    UserData.UserData.Category_Child_Num,
  ];
  var CategoryCreate_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "Blog_Category_Data",
    column,
    dataset
  );
  return CategoryCreate_Result;
};
