exports.Make_Current_Day_Time = function () {
  const today = new Date();
  var Format_Data = "";
  Format_Data += today.getFullYear() + "/";
  Format_Data += today.getMonth() + 1 + "/";
  Format_Data += today.getDate() + " ";
  Format_Data += today.getHours() + ":";
  Format_Data += today.getMinutes() + ":";
  Format_Data += today.getSeconds() + ":";
  Format_Data += today.getMilliseconds();
  return Format_Data;
};
