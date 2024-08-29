const Update_DBMS = require("../../../../CRUD_Query/Update_DBMS.js");

exports.Check_CategoryUpdate = async function (db, UserData) {
  var column = ["Category_Name", "Category_PID"];
  var column_data = [
    UserData.UserData.Category_Name,
    UserData.UserData.Category_PID,
  ];
  var where = ["Category_ID"];
  var where_data = [UserData.UserData.Category_ID];
  var Check_CategoryUpdate_Result = await Update_DBMS.Update_DBMS(
    db,
    "Blog_Category_Data",
    column,
    column_data,
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_CategoryUpdate_Result);
  });
};
