const { global_value } = require("../Function/temp/global_value.js");

exports.Update_DBMS = async function (
  db,
  schema,
  column = [],
  column_data = [],
  where = [],
  where_data = []
) {
  return new Promise((resolve, reject) => {
    var update_column = "";
    var update_where = "";
    for (var i = 0; i < column.length; i++) {
      update_column += column[i] + ' = "';
      update_column += column_data[i] + '", ';
    }

    where.forEach((i) => {
      update_where += i + " = ?, ";
    });

    var query = `UPDATE ${schema} SET ${update_column.slice(
      0,
      -2
    )} WHERE ${update_where.slice(0, -2)};`;
    var return_data;

    db.all(query, where_data, (err, result) => {
      if (err) {
        console.log(err);
        return_data = {
          return_result: "err",
          return_result_num: global_value.return_DBMS_err,
        };
      } else {
        return_data = {
          return_result: result,
          return_result_num: global_value.return_DBMS_success,
        };
      }

      resolve(return_data);
    });
  });
};
