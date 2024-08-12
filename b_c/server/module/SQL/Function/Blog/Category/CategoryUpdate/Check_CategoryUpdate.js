const Update_DBMS = require("../../../CRUD_Query/Update_DBMS.js");

exports.Check_CategoryUpdate = async function (db, formData) {
  var column = ["Category_Name"];
  var column_data = [formData.Category_Name];
  var where = ["Category_ID"];
  var where_data = [formData.Category_ID];
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
