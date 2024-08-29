const Update_DBMS = require("../../../CRUD_Query/Update_DBMS.js");

exports.Check_ChangePW = async function (db, ID, PW) {
  var column = ["User_PW"];
  var column_data = [PW];
  var where = ["User_ID"];
  var where_data = [ID];
  var Check_ChangePW_Result = await Update_DBMS.Update_DBMS(
    db,
    "User_Data",
    column,
    column_data,
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_ChangePW_Result);
  });
};
