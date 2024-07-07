//Find_ID_fuction.js
import { checkFormData } from "./CheckUserInput.js";

export const Find_ID = (formData, setFormData, navigate) => {
  const keysToCheck = ["Phone"];
  const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
  if (!checkFormData(formData, keysToCheck)) {
    return;
  }
  if (!phoneRegex.test(formData.Phone)) {
    alert("전화번호는 010-1234-5678 같이 입력해야 합니다.");
    return;
  }

  alert(JSON.stringify(formData));
};
