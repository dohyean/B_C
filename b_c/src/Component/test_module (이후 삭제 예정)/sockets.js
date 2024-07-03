import io from "socket.io-client";
const socket = io("http://localhost:8080", { transports: ["websocket"] });

const UserData = require("./UserData.js");

export const UserData_Save = (formData) => {
  alert("test");
  UserData.Send_User_Data(socket, formData);
};
