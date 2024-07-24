const FindID_Server_Receive = require("./FindID_Server_Receive.js");

exports.FindID_Server = async function (socket, formData) {
  var FindID_Server_Result = await FindID_Server_Receive.Rec_FindID(
    socket,
    formData
  );

  console.log(FindID_Server_Result);
  return new Promise((resolve, reject) => {
    resolve(FindID_Server_Result);
  });
};
