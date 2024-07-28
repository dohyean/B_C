const { global_value } = require("../temp/global_value.js");
const { Check_ChangePW } = require("./Check_ChangePW.js");
const { Check_ChangeHash } = require("./Check_ChangeHash.js");

exports.ChangePW = async function (db, io, UserData) {
  var ChangePW_Result;
  var Check_ChangePW_Result = await Check_ChangePW(
    db,
    UserData.UserData.ID,
    UserData.UserData.PW
  );
  switch (Check_ChangePW_Result.return_result_num) {
    case global_value.Return_Update_Error:
      ChangePW_Result = global_value.Error;
      break;
    case global_value.Return_Update_Success:
      var Check_ChangeHash_Result = await Check_ChangeHash(
        db,
        UserData.UserData.ID,
        UserData.UserData.Hash.key
      );
      switch (Check_ChangeHash_Result.return_result_num) {
        case global_value.Return_Update_Error:
          ChangePW_Result = global_value.Error;
          break;
        case global_value.Return_Update_Success:
          ChangePW_Result = global_value.All_Complete;
          break;
        default:
          ChangePW_Result = global_value.Other_Error;
          break;
      }
      break;
    default:
      ChangePW_Result = global_value.Other_Error;
      break;
  }

  io.emit("Receive ChangePW", {
    ChangePW_Result: ChangePW_Result,
  });
};
