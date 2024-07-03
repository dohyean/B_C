exports.sql_select = function (db, column, table, where) {
  return new Promise((resolve, rejects) => {
    var select_column = "";

    column.forEach((i) => {
      select_column += i + ", ";
    });

    var query = `SELECT ${column} FROM ${table} VALUES ${where}`;

    db.all(query, (err, result) => {
      if (err) {
        resolve(0);
      } else {
        if (result[0] === undefined) {
          resolve(1);
        } else {
          resolve(2);
        }
      }
    });
  });
};
