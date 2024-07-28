const Insert_DBMS = require("../../CRUD_Query/Insert_DBMS.js");

exports.Save_UserData = async function (db, UserData) {
  var column = [
    "User_ID",
    "User_PW",
    "User_NickName",
    "User_Name",
    "User_PhoneNum",
    "User_Birthday",
  ];
  var dataset = [
    UserData.ID,
    UserData.PW,
    UserData.NickName,
    UserData.Name,
    UserData.PhoneNum,
    UserData.Birthday,
  ];
  var Save_UserData_Result = await Insert_DBMS.Insert_DBMS(
    db,
    "User_Data",
    column,
    dataset
  );
  return Save_UserData_Result;
};
