const Change_PW_Server_Receive = require("./ChangePW_Server_Receive.js");

exports.ChangePW_Server = async function (socket, formData) {
  var ChangePW_Server_Result = await Change_PW_Server_Receive.Rec_ChangePW(
    socket,
    formData
  );
  return new Promise((resolve, reject) => {
    resolve(ChangePW_Server_Result);
  });
};
