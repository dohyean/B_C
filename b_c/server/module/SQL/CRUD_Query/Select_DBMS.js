exports.sql_select = function (db, column, schema, where, where_data) {
  return new Promise((resolve, rejects) => {
    var query = `SELECT ${column} FROM ${schema} ${where}`;
    db.all(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);

        // if (result[0] === undefined) {
        //   resolve(1);
        // } else {
        //   resolve(2);
        // }
      }
    });
  });
};
