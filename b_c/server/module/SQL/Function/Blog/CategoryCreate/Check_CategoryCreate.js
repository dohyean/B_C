const Insert_DBMS = require("../../../CRUD_Query/Insert_DBMS.js");

exports.Check_CategoryCreate = async function (db, UserData) {
  var column = ["User_ID", "Category_Name", "Parenet_Category_ID", "Child_Num"];
  var dataset = [
    UserData.UserData.User_ID,
    UserData.UserData.Category_Name,
    UserData.UserData.Parenet_Category_ID,
    UserData.UserData.Child_Num,
  ];
  var BlogSave_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "Blog_Data",
    column,
    dataset
  );
  return BlogSave_Result;
};
