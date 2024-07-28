const Select_DBMS = require("../../CRUD_Query/Select_DBMS.js");

exports.Check_Login = async function (db, UserData) {
  const Data = [UserData.ID, UserData.PW];
  const Check_FindID_Result = await Select_DBMS.Select_DBMS(
    db,
    "User_ID, User_NickName",
    "User_Data",
    "User_ID = ? and User_PW = ?",
    Data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_FindID_Result);
  });
};
