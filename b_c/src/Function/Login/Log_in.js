const sockets = require("../../Component/moudle/sockets.js");

const Return_Select_Error = 0;
const Return_Select_Match = 1;
const Return_Select_Undefined = 2;

async function Check_Log_in(formData, setFormData, navigate) {
  try {
    const GetHash_Server_Result = await sockets.GetHash(formData);
    switch (GetHash_Server_Result.GetHash_Server_Result_num) {
      case Return_Select_Undefined:
        alert("해당하는 아이디가 없음.");
        break;
      case Return_Select_Match:
        // alert("로그인 완료.");
        alert(GetHash_Server_Result.GetHash_Server_Result);
        setFormData({
          ID: "",
          PW: "",
        });
        navigate("/HomePageLogin");
        break;
      case Return_Select_Error:
        alert("오류.");
        break;
      default:
        alert("관리자에게 문의하세요.");
        break;
    }
  } catch (err) {
    console.log("Sign-up error: ", err);
    alert("서버 오류. 다시 시도해 주세요.");
  } finally {
    // sockets.Disconnect();
  }
}

export async function Log_in(formData, setFormData, navigate) {
  await Check_Log_in(formData, setFormData, navigate);
}
