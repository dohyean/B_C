// sign_up_function.js
export const Sign_Up = (formData, setFormData, navigate) => {
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,32}$/;

  for (let key in formData) {
    if (formData[key] === "") {
      var key_info = "";
      if (key === "ID") key_info = "아이디";
      else if (key === "PW") key_info = "비밀번호";
      else if (key === "confirmPW") key_info = "비밀번호 재입력";
      else if (key === "nickname") key_info = "별명";
      else if (key === "name") key_info = "이름";
      else if (key === "Phone") key_info = "전화번호";
      else if (key === "Birth") key_info = "생년월일";
      const strings = key_info + "를(을) 입력해주세요";
      alert(strings);
      return;
    }
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
