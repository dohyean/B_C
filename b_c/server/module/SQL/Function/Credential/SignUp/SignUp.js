const { global_value } = require("../../temp/global_value.js");
const { Check_Duplicate_ID } = require("./Check_Duplicate_ID.js");
const { Save_UserData } = require("./Save_UserData.js");
const { Save_HashData } = require("./Save_HashData.js");

exports.SignUp = async function (db, io, UserData) {
  var SignUp_Server_Result;
  switch (await Check_Duplicate_ID(db, UserData.UserData.ID)) {
    case global_value.Return_Select_Error:
      SignUp_Server_Result = global_value.Error;
      break;
    case global_value.Return_Select_Undefined:
      switch (await Save_UserData(db, UserData.UserData)) {
        case global_value.Return_Update_Error:
          SignUp_Server_Result = global_value.Error;
          break;
        case global_value.Return_Update_Success:
          switch (
            await Save_HashData(
              db,
              UserData.UserData.ID,
              UserData.UserData.Hash.key
            ).return_result_num
          ) {
            case global_value.Return_Update_Error:
              SignUp_Server_Result = global_value.Error;
              break;
            case global_value.Return_Update_Success:
              SignUp_Server_Result = global_value.All_Complete;
              break;
            default:
              SignUp_Server_Result = global_value.Other_Error;
              break;
          }
          SignUp_Server_Result = global_value.All_Complete;
          break;
        default:
          SignUp_Server_Result = global_value.Other_Error;
          break;
      }
      break;
    case global_value.Return_Select_Match:
      SignUp_Server_Result = global_value.Fail;
      break;
    default:
      SignUp_Server_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive SignUp", {
    SignUp_Server_Result: SignUp_Server_Result,
  });
};
