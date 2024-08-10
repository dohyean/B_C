const Update_DBMS = require("../../../CRUD_Query/Update_DBMS.js");

exports.Check_ChangeHash = async function (db, ID, Hash) {
  var column = ["User_Hash"];
  var column_data = [Hash];
  var where = ["User_ID"];
  var where_data = [ID];
  var Check_ChangeHash_Result = await Update_DBMS.Update_DBMS(
    db,
    "Hash_Data",
    column,
    column_data,
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_ChangeHash_Result);
  });
};
