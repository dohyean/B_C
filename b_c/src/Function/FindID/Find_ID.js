//Find_ID_fuction.js
const sockets = require("../../Component/moudle/sockets.js");

const Return_Success = 0;
const Return_Fail = 1;
const Return_Error = 2;

function Make_String_All_ID(ID_Data) {
  var return_string = "";

  for (var i = 0; i < ID_Data.length; i++) {
    return_string += ID_Data[i].User_ID + "\r\n";
  }

  return new Promise((resolve, reject) => {
    resolve(return_string);
  });
}

async function Check_Find_ID(formData, setFormData, navigate) {
  try {
    var FindID_Server_Result = await sockets.FindID_Server(formData);
    switch (FindID_Server_Result.FindID_Result.FindID_return_result_num) {
      case Return_Success:
        var String_ID = await Make_String_All_ID(
          FindID_Server_Result.FindID_Result.FindID_return_result
        );
        console.log("Generated String_ID:", String_ID); // 데이터 로그 출력
        alert(String_ID);
        setFormData({
          Phone: "",
        });
        navigate("/SelectID", { state: { String_ID } }); // state 객체로 전달
        break;
      case Return_Fail:
        alert("해당하는 번호가 없습니다.");
        break;
      case Return_Error:
        alert("오류.");
        break;
      default:
        alert("관리자에게 문의하세요.");
        break;
    }
  } catch (err) {
    console.log("Find-ID error: ", err);
    alert("서버 오류. 다시 시도해 주세요.");
  }
}

export async function Find_ID(formData, setFormData, navigate) {
  await Check_Find_ID(formData, setFormData, navigate);
}
