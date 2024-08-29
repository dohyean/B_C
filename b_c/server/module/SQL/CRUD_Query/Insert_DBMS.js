const { global_value } = require("../Function/temp/global_value.js");

exports.Insert_DBMS = function (db, schema, column, dataset) {
  return new Promise((resolve, reject) => {
    db.run("PRAGMA foreign_keys = ON", (err) => {
      if (err) {
        console.error("Failed to enable foreign key constraints:", err.message);
        reject(err);
        return;
      }

      const insert_column = column.join(", ");
      const column_num = column.map(() => "?").join(", ");

      const query = `INSERT INTO ${schema} (${insert_column}) VALUES (${column_num})`;

      db.run(query, dataset, (err) => {
        // 'db.all'을 'db.run'으로 수정하여 INSERT를 수행
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
