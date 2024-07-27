const SHA256 = require("crypto-js/sha256");

function Make_Format_Data() {
  const today = new Date();
  var Format_Data = "";
  Format_Data += today.getFullYear() + "/";
  Format_Data += today.getMonth() + 1 + "/";
  Format_Data += today.getDate() + " ";
  Format_Data += today.getHours() + ":";
  Format_Data += today.getMinutes() + ":";
  Format_Data += today.getSeconds() + ":";
  Format_Data += today.getMilliseconds();
  return new Promise((resolve, rejects) => {
    resolve(Format_Data);
  });
}

exports.Make_Hash = async function (io) {
  Make_Format_Data()
    .then((Format_Data) => {
      const key = SHA256(Format_Data).toString();

      io.emit("Receive MakeHash", {
        key: key,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
