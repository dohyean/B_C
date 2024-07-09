const return_err = 0;
const return_undefined = 1;
const return_success = 2;

exports.sql_select = async function (
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
          return_result_print: "err",
          return_result_num: return_err,
        };
      } else {
        if (result[0] === undefined) {
          db_complete_check = true;
          return_data = {
            return_result_print: "",
            return_result_num: return_undefined,
          };
        } else {
          db_complete_check = true;
          return_data = {
            return_result_print: result,
            return_result_num: return_success,
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
