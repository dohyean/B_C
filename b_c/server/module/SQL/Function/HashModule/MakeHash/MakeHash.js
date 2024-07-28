const SHA256 = require("crypto-js/sha256");
const { Make_Current_Day_Time } = require("./Make_Current_Day_Time.js");

exports.MakeHash = async function (io) {
  try {
    const Format_Data = Make_Current_Day_Time();
    const key = SHA256(Format_Data).toString();

    io.emit("Receive MakeHash", { key: key });
  } catch (err) {
    console.error("Error:", err);
  }
};
