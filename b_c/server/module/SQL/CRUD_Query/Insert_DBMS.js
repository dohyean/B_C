const { global_value } = require("../Function/temp/global_value.js");

exports.Insert_DBMS = function (db, schema, column, dataset) {
  return new Promise((resolve, rejects) => {
    const insert_column = column.join(", ");
    const column_num = column.map(() => "?").join(", ");

    const query = `INSERT INTO ${schema} (${insert_column}) VALUES (${column_num})`;

    db.all(query, dataset, (err, result) => {
      if (err) {
        console.log(err);
        resolve(global_value.return_DBMS_err);
      } else {
        resolve(global_value.return_DBMS_success);
      }
    });
  });
};
