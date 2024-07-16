import { useState } from "react";

//회원가입
export const useFormErrors_ChangePW = (initialState) => {
  const [errors, setErrors] = useState(initialState);

  const validatePassword = (password) => {
    // 비밀번호는 최소 8자 이상, 하나 이상의 숫자와 하나의 특수문자를 포함해야 한다고 가정
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const updateErrors = (name, value, formData) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "PW") newErrors.PW = !value || !validatePassword(value);
      if (name === "confirmPW")
        newErrors.confirmPW = !value || value !== formData.PW;
      return newErrors;
    });
  };

  const checkErrors = (formData) => {
    const newErrors = {
      PW: !formData.PW || !validatePassword(formData.PW),
      confirmPW: !formData.confirmPW || formData.PW !== formData.confirmPW,
    };
    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error);
  };

  return { errors, updateErrors, checkErrors };
};
