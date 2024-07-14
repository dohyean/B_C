const sockets = require("../../Component/moudle/sockets.js");

const Return_Success = 0;
const Return_Fail = 1;
const Return_Error = 2;

async function Check_Find_PW(formData, setFormData, navigate) {
  try {
    var FindPW_Server_Result = await sockets.FindPW_Server(formData);
    switch (FindPW_Server_Result.FindPW_Result.FindPW_return_result_num) {
      case Return_Success:
        // alert(
        //   FindPW_Server_Result.FindPW_Result.FindPW_return_result[0].User_PW
        // ); //비밀번호를 알람으로 주지 않고 바로 비밀번호 변경 화면으로 넘가가게 함
        setFormData({
          ID: "",
          Phone: "",
        });
        navigate("/ChangePW");
        break;
      case Return_Fail:
        alert("해당하는 아이디, 전화번호가 없습니다.");
        break;
      case Return_Error:
        alert("오류.");
        break;
      default:
        alert("관리자에게 문의하세요.");
        break;
    }
  } catch (err) {
    console.log("Find-PW error: ", err);
    alert("서버 오류. 다시 시도해 주세요.");
  } finally {
    // sockets.Disconnect();
  }
}

export async function Find_PW(formData, setFormData, navigate) {
  await Check_Find_PW(formData, setFormData, navigate);
}
