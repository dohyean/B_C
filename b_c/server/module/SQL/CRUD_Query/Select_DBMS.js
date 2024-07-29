const { global_value } = require("../Function/temp/global_value.js");

function Fill_Return_Data(return_result, return_result_num) {
  const result = {
    return_result: return_result,
    return_result_num: return_result_num,
  };
  return result;
}

exports.Select_DBMS = async function (
  db,
  column,
  schema,
  where = "",
  where_data = []
) {
  const query = where
    ? `SELECT ${column} FROM ${schema} WHERE ${where}`
    : `SELECT ${column} FROM ${schema}`;

  return new Promise((resolve, reject) => {
    db.all(query, where_data, (err, result) => {
      if (err) {
        console.error(err);
        resolve(Fill_Return_Data("err", global_value.return_DBMS_err));
      } else if (result.length === 0) {
        resolve(Fill_Return_Data("", global_value.return_DBMS_undefined));
      } else {
        resolve(Fill_Return_Data(result, global_value.return_DBMS_success));
      }
    });
  });
};
