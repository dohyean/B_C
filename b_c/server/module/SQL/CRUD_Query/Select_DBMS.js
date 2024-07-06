exports.sql_select = function (db, column, schema, where="", where_data=[]) {
  return new Promise((resolve, rejects) => {
    var query;
    if(where === "")
      query = `SELECT ${column} FROM ${schema} ${where}`;
    else
      query = `SELECT ${column} FROM ${schema} WHERE ${where}`

    var return_resolve = 0;
    db.all(query, where_data, (err, result) => {
      if (err) {
        console.log(err);
        return_resolve = 0;
      } else {
        if (result[0] === undefined) {
          return_resolve = 1;
        } else {
          return_resolve = 2;
        }
      }
    });
    resolve(return_resolve);
  });
};
