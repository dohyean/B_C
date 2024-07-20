const sockets = require("../../Component/moudle/sockets.js");

const Return_Success = 0;
const Return_Fail = 1;
const Return_Error = 2;

async function Check_Change_PW(formData, setFormData, navigate) {
  try {
    // alert(formData.PW);

    var ChangePW_Server_Result = await sockets.ChangePW_Server(formData);
    switch (ChangePW_Server_Result) {
      case Return_Success:
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
  // setFormData({
  //   PW: "",
  //   confirmPW: "",
  // });
  // navigate("/ChangePW");
};


export async function Change_PW(formData, setFormData, navigate) {
  await Check_Change_PW(formData, setFormData, navigate);
}
