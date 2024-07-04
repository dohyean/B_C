import { CheckUserInfo, checkFormData } from "./CheckUserInput.js";

export const Log_in = (formData, setFormData, navigate) => {
  const keysToCheck = ["ID", "PW"];
  if (!checkFormData(formData, keysToCheck)) {
    return;
  }

  alert(JSON.stringify(formData));

  navigate("/HomePageLogin");
};
