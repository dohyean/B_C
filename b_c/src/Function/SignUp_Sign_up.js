// sign_up_function.js
const sockets = require("../Component/moudle/sockets.js");
const Return_Success = 0;
const Return_Duplicate_ID = 1;
const Return_Error = 2;

async function Check_Sign_Up(formData, setFormData, navigate) {
  try {
    var SignUp_Server_Result = await sockets.UserData_Save(formData);
    alert(SignUp_Server_Result.SignUp_Server_Result);
    switch (SignUp_Server_Result.SignUp_Server_Result) {
      case Return_Success:
        setFormData({
          ID: "",
          PW: "",
          confirmPW: "",
          nickname: "",
          name: "",
          Phone: "",
          Birth: "",
        });
        alert("회원가입 완료");
        navigate("/Login");
        break;
      case Return_Duplicate_ID:
        alert("아이디 중복");
        break;
      case Return_Error:
        alert("오류 관리자에게 문의하세요.");
        break;
      default:
        alert("default 관리자에게 문의하세요.");
        break;
    }
  } catch (error) {
    console.error("Sign-up error:", error);
    alert("서버 오류. 다시 시도해 주세요.");
  }
}

export async function Sign_Up(formData, setFormData, navigate) {
  await Check_Sign_Up(formData, setFormData, navigate);
}
