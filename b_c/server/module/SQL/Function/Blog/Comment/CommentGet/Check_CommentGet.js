const Select_DBMS = require("../../../../CRUD_Query/Select_DBMS.js");

exports.Check_CommentGet = async function (db, UserData) {
  var column = ["*"];
  var where = ["Post_ID = ?"];
  var where_data = [UserData.UserData.Post_ID];
  var Check_CommentGet_Result = await Select_DBMS.Select_DBMS(
    db,
    column,
    "Blog_Comment_Data",
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_CommentGet_Result);
  });
};
