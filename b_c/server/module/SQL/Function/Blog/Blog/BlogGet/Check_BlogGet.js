const Select_DBMS = require("../../../../CRUD_Query/Select_DBMS.js");

exports.Check_BlogGet = async function (db, UserData) {
  var column = ["*"];
  var where = ["User_ID = ?"];
  var where_data = [UserData.UserData.User_ID];
  var Check_BlogGet_Result = await Select_DBMS.Select_DBMS(
    db,
    column,
    "Blog_Data",
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_BlogGet_Result);
  });
};
