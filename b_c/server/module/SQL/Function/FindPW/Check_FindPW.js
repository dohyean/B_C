const Select_DBMS = require("../../CRUD_Query/Select_DBMS.js");

exports.Check_FindPW = async function (db, UserData) {
  var Check_FindPW_Result = await Select_DBMS.Select_DBMS(
    db,
    "User_PW",
    "User_Data",
    "User_ID = ? AND User_PhoneNum = ?",
    UserData
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_FindPW_Result);
  });
};
