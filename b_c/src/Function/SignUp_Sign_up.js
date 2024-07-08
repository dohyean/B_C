// sign_up_function.js

export const Sign_Up = (formData, setFormData, navigate) => {
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
