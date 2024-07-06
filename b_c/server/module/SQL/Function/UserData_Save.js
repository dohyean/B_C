const s = require("../CRUD_Query/Select_DBMS.js");

exports.UserData_Save = function (db, UserData) {
    return new Promise((resolve, rejects) => {
        var data = [UserData.ID];
        var save = s.sql_select(db, "User_ID", "User_Data", "User_ID = ?", data);
        
        console.log(save);
    });
  };
  