const return_err = 0;
const return_success = 1;

exports.sql_insert = function (db, schema, column, dataset) {
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
        resolve(return_err);
      } else {
        resolve(return_success);
      }
    });
  });
};
