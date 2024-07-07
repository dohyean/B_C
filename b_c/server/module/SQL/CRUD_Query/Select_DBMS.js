const return_err = 0;
const return_undefined = 1;
const return_success = 2;

async function select_query(db, query, where_data) {
  return await db.all(query, where_data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result); // 추후 log 저장을 위해 남겨둠
    }
  });
}

exports.sql_select = async function (
  db,
  column,
  schema,
  where = "",
  where_data = []
) {
  var query;
  if (where === "") query = `SELECT ${column} FROM ${schema} ${where}`;
  else query = `SELECT ${column} FROM ${schema} WHERE ${where}`;

  var result = await select_query(db, query, where_data);
  var return_data;
  if (result[0] === "err") {
    return_data = { return_result: result, return_num: return_err };
  } else if (result[0] === undefined) {
    return_data = { return_result: result, return_num: return_undefined };
  } else {
    return_data = { return_result: result, return_num: return_success };
  }

  return new Promise((resolve, reject) => {
    resolve(return_data);
  });
};
