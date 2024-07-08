const io = require("socket.io-client");
const socket = io("http://localhost:3001");

const UserData = require("./UserData.js");

async function UserData_Save(formData) {
  var save = UserData.Rec_User_Data(socket, formData);
  console.log(save);
  return new Promise((resolve, reject) => {
    resolve(save);
  });
}

module.exports = {
  UserData_Save,
};
