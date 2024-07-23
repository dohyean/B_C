const Login_Server_Receive = require("./Login_Server_Receive.js");

exports.Login_Server = async function (socket, formData) {
  var Login_Server_Result = await Login_Server_Receive.Rec_Login(
    socket,
    formData
  );
  return new Promise((resolve, reject) => {
    resolve(Login_Server_Result);
  });
};
