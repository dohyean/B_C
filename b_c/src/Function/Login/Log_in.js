const sockets = require("../../Component/moudle/sockets.js");

const Return_Select_Error = 2;
const Return_Select_Match = 0;
const Return_Select_Undefined = 1;

async function Login(formData, setFormData, navigate) {
  try {
    const Login_Server_Result = await sockets.Login_Server(formData);
    console.log(Login_Server_Result.Login_Result.result); // 데이터 저장 확인 (닉네임도 가져옴)
    const loginResult = Login_Server_Result.Login_Result.result[0]; // 배열의 첫 번째 요소에 접근
    const nickname = loginResult.User_NickName; // User_NickName 가져오기
    console.log("닉네임 : ", nickname); //닉네인 되는지 로그 찍기

    switch (Login_Server_Result.Login_Result.result_num) {
      case Return_Select_Undefined:
        alert("비밀번호 틀림.");
        break;
      case Return_Select_Match:
        alert("로그인 완료.");
        setFormData({
          ID: "",
          PW: "",
        });
        // 닉네임을 로컬 스토리지에 저장
        localStorage.setItem("nickname", nickname);
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
  }
}

async function GetHash(formData, setFormData, navigate) {
  try {
    const GetHash_Server_Result = await sockets.GetHash_Server(formData);
    console.log(GetHash_Server_Result.GetHash_Result);
    switch (GetHash_Server_Result.GetHash_Result.GetHash_return_result_num) {
      case Return_Select_Undefined:
        alert("해당하는 아이디가 없음.");
        break;
      case Return_Select_Match:
        const key =
          GetHash_Server_Result.GetHash_Result.GetHash_return_result[0]
            .User_Hash;
        formData.key = key;
        await Login(formData, setFormData, navigate);
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

async function Check_Log_in(formData, setFormData, navigate) {
  try {
    GetHash(formData, setFormData, navigate);
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
