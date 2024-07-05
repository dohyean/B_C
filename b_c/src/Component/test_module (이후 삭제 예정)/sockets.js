import io from "socket.io-client";
// const socket = io("http://localhost:3001", { transports: ["websocket"] });
const socket = io("http://localhost:3001");

const UserData = require("./UserData.js");

export const UserData_Save = (formData) => {
  UserData.Send_User_Data(socket, formData);
};
