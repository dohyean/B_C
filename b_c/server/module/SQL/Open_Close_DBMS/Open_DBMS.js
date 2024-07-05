// SQLITE 실행 모듈
const sqlite3 = require("sqlite3").verbose();

exports.open_dbms = function () {
  var db = new sqlite3.Database("./server/db_control.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
  });
  return db;
};
