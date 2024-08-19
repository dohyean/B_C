const Select_DBMS = require("../../../../CRUD_Query/Select_DBMS.js");

exports.Check_CategoryGet = async function (db, UserData) {
  var column = ["*"];
  var where = ["Blog_ID = ?"];
  var where_data = [UserData.UserData.Blog_ID];
  var Check_CategoryGet_Result = await Select_DBMS.Select_DBMS(
    db,
    column,
    "Blog_Category_Data",
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_CategoryGet_Result);
  });
};
