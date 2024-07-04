//Find_ID_fuction.js
import { CheckUserInfo, checkFormData } from "./CheckUserInput.js";

export const Find_ID = (formData, setFormData, navigate) => {
  const keysToCheck = ["Phone"];
  if (!checkFormData(formData, keysToCheck)) {
    return;
  }
  alert(JSON.stringify(formData));
};
