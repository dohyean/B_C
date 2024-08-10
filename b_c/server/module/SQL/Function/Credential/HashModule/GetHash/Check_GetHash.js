const Select_DBMS = require("../../../../CRUD_Query/Select_DBMS.js");

exports.Check_GetHash = async function (db, ID) {
  var Check_GetHash_Result = await Select_DBMS.Select_DBMS(
    db,
    "User_Hash",
    "Hash_Data",
    "User_ID = ?",
    ID
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_GetHash_Result);
  });
};
