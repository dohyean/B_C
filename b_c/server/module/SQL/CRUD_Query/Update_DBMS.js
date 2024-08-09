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
    db.run("PRAGMA foreign_keys = ON", (err) => {
      if (err) {
        console.error("Failed to enable foreign key constraints:", err.message);
        reject(err);
        return;
      }

      const update_column = column.map((col) => `${col} = ?`).join(", ");
      const update_where = where.map((col) => `${col} = ?`).join(" AND ");

      const query = `UPDATE ${schema} SET ${update_column} WHERE ${update_where}`;

      const data = [...column_data, ...where_data];

      db.run(query, data, (err, result) => {
        let return_data;
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
  });
};
