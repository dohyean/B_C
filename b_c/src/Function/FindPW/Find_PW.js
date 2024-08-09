const sockets = require("../../Component/module/sockets.js");

const Return_Success = 0;
const Return_Fail = 1;
const Return_Error = 2;

async function Check_Find_PW(formData, setFormData, navigate) {
  try {
    var FindPW_Server_Result = await sockets.FindPW_Server(formData);
    switch (FindPW_Server_Result.FindPW_Result.FindPW_return_result_num) {
      case Return_Success:
        setFormData({
          ID: "",
          Phone: "",
        });
        navigate("/ChangePW", {
          state: { ID: formData.ID },
        }); //이동할 때 아이디 보내기
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
  }
}

export async function Find_PW(formData, setFormData, navigate) {
  await Check_Find_PW(formData, setFormData, navigate);
}
