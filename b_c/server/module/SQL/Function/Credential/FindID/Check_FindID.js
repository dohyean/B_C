const Select_DBMS = require("../../../CRUD_Query/Select_DBMS.js");

exports.Check_FindID = async function (db, Phone) {
  var Check_FindID_Result = await Select_DBMS.Select_DBMS(
    db,
    "User_ID",
    "User_Data",
    "User_PhoneNum = ?",
    Phone
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_FindID_Result);
  });
};
