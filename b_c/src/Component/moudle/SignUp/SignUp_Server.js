const SignUp_Server_Receive = require("./SignUp_Server_Receive.js");

exports.SignUp_Server = async function (socket, formData) {
  var SignUp_Server_Result = await SignUp_Server_Receive.Rec_SignUp(
    socket,
    formData
  );
  return new Promise((resolve, reject) => {
    resolve(SignUp_Server_Result);
  });
};
