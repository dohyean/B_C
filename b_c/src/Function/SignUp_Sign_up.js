// sign_up_function.js
import { CheckUserInfo, checkFormData } from "./CheckUserInput.js";

export const Sign_Up = (formData, setFormData, navigate) => {
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,32}$/;
  var phoneRegex = /^\d{3}-\d{4}-\d{4}$/;

  const keysToCheck = [
    "ID",
    "PW",
    "confirmPW",
    "nickname",
    "name",
    "Phone",
    "Birth",
  ];
  if (!checkFormData(formData, keysToCheck)) {
    return;
  }
  if (!phoneRegex.test(formData.Phone)) {
    alert("전화번호는 010-1234-5678 형식으로 입력해야 합니다.");
    return;
  }

  if (!passwordRegex.test(formData.PW)) {
    alert(
      "비밀번호는 8~32자 이내의 영문자, 숫자 및 특수 문자를 포함해야 합니다."
    );
    return;
  }

  if (formData.PW !== formData.confirmPW) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  alert(JSON.stringify(formData));

  // 회원 가입 성공 시 초기화
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
};
