const { global_value } = require("../Function/temp/global_value.js");

exports.Delete_DBMS = function (db, schema, where = "", dataset = []) {
  return new Promise((resolve, reject) => {
    db.run("PRAGMA foreign_keys = ON", (err) => {
      if (err) {
        console.error("Failed to enable foreign key constraints:", err.message);
        reject(err);
        return;
      }

      var query = `DELETE FROM ${schema} WHERE ${where}`;

      db.run(query, dataset, (err, result) => {
        if (err) {
          console.log(err);
          resolve(global_value.return_DBMS_err);
        } else {
          resolve(global_value.return_DBMS_success);
        }
      });
    });
  });
};
