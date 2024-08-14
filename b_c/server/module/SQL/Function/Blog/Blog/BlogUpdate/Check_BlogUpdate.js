const Update_DBMS = require("../../../../CRUD_Query/Update_DBMS.js");

exports.Check_BlogUpdate = async function (db, UserData) {
  var column = ["Blog_Name", "Blog_Description"];
  var column_data = [
    UserData.UserData.Blog_Name,
    UserData.UserData.Blog_Description,
  ];
  var where = ["Blog_ID"];
  var where_data = [UserData.UserData.Blog_ID];
  var Check_BlogUpdate_Result = await Update_DBMS.Update_DBMS(
    db,
    "Blog_Data",
    column,
    column_data,
    where,
    where_data
  );
  console.log(Check_BlogUpdate_Result);
  return new Promise((resolve, rejects) => {
    resolve(Check_BlogUpdate_Result);
  });
};
