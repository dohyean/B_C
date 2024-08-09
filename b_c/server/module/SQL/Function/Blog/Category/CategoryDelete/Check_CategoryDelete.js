const Delete_DBMS = require("../../../../CRUD_Query/Delete_DBMS.js");

exports.Check_CategoryDelete = async function (db, UserData) {
  var Check_CategoryDelete_Result = await Delete_DBMS.Delete_DBMS(
    db,
    "Blog_Category_Data",
    "Category_ID = ?",
    UserData.UserData.Category_ID
  );
  return Check_CategoryDelete_Result.return_result_num;
};
