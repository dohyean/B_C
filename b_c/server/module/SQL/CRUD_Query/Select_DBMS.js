const { global_value } = require("../Function/temp/global_value.js");


exports.Select_DBMS = async function (
  db,
  column,
  schema,
  where = "",
  where_data = []
) {
  var query;
  if (where === "") query = `SELECT ${column} FROM ${schema}`;
  else query = `SELECT ${column} FROM ${schema} WHERE ${where}`;

  return new Promise((resolve, reject) => {
    var db_complete_check = false;
    var return_data;

    db.all(query, where_data, (err, result) => {
      if (err) {
        console.log(err);
        db_complete_check = true;
        return_data = {
          return_result: "err",
          return_result_num: global_value.return_DBMS_err,
        };
      } else {
        if (result[0] === undefined) {
          db_complete_check = true;
          return_data = {
            return_result: "",
            return_result_num: global_value.return_DBMS_undefined,
          };
        } else {
          db_complete_check = true;
          return_data = {
            return_result: result,
            return_result_num: global_value.return_DBMS_success,
          };
        }
      }
      while (true) {
        if (db_complete_check) {
          resolve(return_data);
          break;
        }
      }
    });
  });
};
