const { global_value } = require("../Function/temp/global_value.js");

exports.Insert_DBMS = function (db, schema, column, dataset) {
  return new Promise((resolve, rejects) => {
    var insert_column = "";
    var column_num = "";

    column.forEach((i) => {
      insert_column += i + ", ";
      column_num += "?, ";
    });

    var query = `INSERT INTO ${schema}(${insert_column.slice(0, -2)})
                 VALUES (${column_num.slice(0, -2)})`;

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
