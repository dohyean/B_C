const FindPW_Server_Receive = require("./FindPW_Server_Receive.js");

exports.FindPW_Server = async function (socket, formData) {
  var FindPW_Server_Result = await FindPW_Server_Receive.Rec_FindPW(
    socket,
    formData
  );
  return new Promise((resolve, reject) => {
    resolve(FindPW_Server_Result);
  });
};
