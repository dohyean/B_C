const { global_value } = require("../../../temp/global_value.js");
const Check_PostCreate = require("./Check_PostCreate.js");

exports.PostCreate = async function (db, io, UserData) {
  var PostCreate_Result;
  switch (await Check_PostCreate.Check_PostCreate(db, UserData)) {
    case global_value.Return_Insert_Error:
      PostCreate_Result = global_value.Error;
      break;
    case global_value.Return_Insert_Success:
      PostCreate_Result = global_value.All_Complete;
      break;
    default:
      PostCreate_Result = global_value.Other_Error;
      break;
  }
  console.log("test : " + PostCreate_Result);
  io.emit("Receive BlogPostCreate", {
    PostCreate_Result: PostCreate_Result,
  });
};
