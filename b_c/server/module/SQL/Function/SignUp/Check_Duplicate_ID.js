const Select_DBMS = require("../../CRUD_Query/Select_DBMS.js");

exports.Check_Duplicate_ID = async function (db, UserID) {
  var Check_Duplicate_ID_Result = await Select_DBMS.Select_DBMS(
    db,
    "User_ID",
    "User_Data",
    "User_ID = ?",
    UserID
  );
  return Check_Duplicate_ID_Result.return_result_num;
};
