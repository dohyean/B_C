export const CheckUserInfo = {
  ID: "아이디",
  PW: "비밀번호",
  confirmPW: "비밀번호 재입력",
  nickname: "별명",
  name: "이름",
  Phone: "전화번호",
  Birth: "생년월일",
};

export const checkFormData = (formData, keysToCheck) => {
  for (let key of keysToCheck) {
    if (formData[key] === "") {
      const keyInfo = CheckUserInfo[key];
      if (keyInfo) {
        alert(`${keyInfo}를(을) 입력해주세요`);
      }
      return false;
    }
  }
  return true;
};
