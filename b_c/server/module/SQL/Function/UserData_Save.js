const Select_DBMS = require("../CRUD_Query/Select_DBMS.js");

exports.UserData_Save = async function (db, io, UserData) {
  var data = [UserData.ID];
  var save = await Select_DBMS.sql_select(
    db,
    "User_ID",
    "User_Data",
    "User_ID = ?",
    data
  );

  console.log(save.return_num);

  return new Promise((resolve, rejects) => {
    io.emit("Receive User Data Save", { result: save.return_num });
  });
};
