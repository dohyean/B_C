const Select_DBMS = require("../../CRUD_Query/Select_DBMS.js");
const { global_value } = require("../temp/global_value.js");

exports.GetHash = async function (db, io, data) {
  var GetHash_Result;
  const Return_HashKey = await Select_DBMS.Select_DBMS(
    db,
    "User_Hash",
    "Hash_Data",
    "User_ID = >",
    data.ID
  );

  switch (Return_HashKey.return_result_num) {
    case global_value.Return_Select_Error:
      GetHash_Result = {
        GetHash_return_result: "err",
        GetHash_return_result_num: global_value.Error,
      };
      break;
    case global_value.Return_Select_Undefined:
      GetHash_Result = {
        GetHash_return_result: "",
        GetHash_return_result_num: global_value.Fail,
      };
      break;
    case global_value.Return_Select_Match:
      GetHash_Result = {
        GetHash_return_result: Return_HashKey.return_result,
        GetHash_return_result_num: global_value.All_Complete,
      };
      break;
    default:
      GetHash_Result = {
        GetHash_return_result: "err",
        GetHash_return_result_num: global_value.Other_Error,
      };
      break;
  }

  io.emit("Receive GetHash", {
    GetHash_Result: GetHash_Result,
  });
};
