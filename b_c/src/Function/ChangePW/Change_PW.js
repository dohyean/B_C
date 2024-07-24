const sockets = require("../../Component/moudle/sockets.js");

const Return_Success = 0;
const Return_Fail = 1;
const Return_Error = 2;

async function Check_Change_PW(formData, setFormData, navigate) {
  try {
    var ChangePW_Server_Result = await sockets.ChangePW_Server(formData);
    console.log(ChangePW_Server_Result.ChangePW_Result);
    switch (ChangePW_Server_Result.ChangePW_Result) {
      case Return_Success:
        setFormData({
          PW: "",
          confirmPW: "",
        });
        alert("변경 완료.");
        navigate("/Login");
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
  } finally {
    // sockets.Disconnect();
  }
}

export async function Change_PW(formData, setFormData, navigate) {
  await Check_Change_PW(formData, setFormData, navigate);
}
