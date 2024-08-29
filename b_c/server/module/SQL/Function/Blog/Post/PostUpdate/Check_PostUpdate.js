const Update_DBMS = require("../../../../CRUD_Query/Update_DBMS.js");

exports.Check_PostUpdate = async function (db, UserData) {
  var column = ["Post_Title", "Post_Content", "Post_visibility_Status"];
  var column_data = [
    UserData.UserData.Post_Title,
    UserData.UserData.Post_Content,
    UserData.UserData.Post_Visibility_Status,
  ];
  var where = ["Post_ID"];
  var where_data = [UserData.UserData.Post_ID];
  var Check_PostUpdate_Result = await Update_DBMS.Update_DBMS(
    db,
    "Blog_Post_Data",
    column,
    column_data,
    where,
    where_data
  );
  return new Promise((resolve, rejects) => {
    resolve(Check_PostUpdate_Result);
  });
};
