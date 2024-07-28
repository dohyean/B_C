const Update_DBMS = require("../../CRUD_Query/Update_DBMS.js");

exports.Save_HashData = async function (db, ID, Hash) {
  var column = ["User_Hash"];
  var column_data = [Hash];
  var where = ["User_ID"];
  var where_data = [ID];
  var Check_Save_Hash_Result = await Update_DBMS.Update_DBMS(
    db,
    "Hash_Data",
    column,
    column_data,
    where,
    where_data
  );
  return Check_Save_Hash_Result;
};
