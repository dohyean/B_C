import { CheckUserInfo, checkFormData } from "./CheckUserInput.js";

export const Find_PW = (formData, setFormData, navigate) => {
  const keysToCheck = ["ID", "Phone"];
  if (!checkFormData(formData, keysToCheck)) {
    return;
  }
  alert(JSON.stringify(formData));
};
