import { useState } from "react";

//회원가입
export const useFormErrors_SignUP = (initialState) => {
  const [errors, setErrors] = useState(initialState);

  const validatePhone = (phone) => {
    //전화번호는 0000-0000-0000형식으로 받음
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    // 비밀번호는 최소 8자 이상, 하나 이상의 숫자와 하나의 특수문자를 포함해야 한다고 가정
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateID = (id) => {
    // 아이디는 영문 대소문자와 숫자만 허용
    const idRegex = /^[A-Za-z\d]+$/;
    return idRegex.test(id);
  };

  const updateErrors = (name, value, formData) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "ID") newErrors.ID = !value || !validateID(value);
      if (name === "PW") newErrors.PW = !value || !validatePassword(value);
      if (name === "confirmPW")
        newErrors.confirmPW = !value || value !== formData.PW;
      if (name === "nickname") newErrors.nickname = !value;
      if (name === "name") newErrors.name = !value;
      if (name === "Phone") newErrors.Phone = !validatePhone(value);
      if (name === "Birth") newErrors.Birth = !value;
      return newErrors;
    });
  };

  const checkErrors = (formData) => {
    const newErrors = {
      ID: !formData.ID || !validateID(formData.ID),
      PW: !formData.PW || !validatePassword(formData.PW),
      confirmPW: !formData.confirmPW || formData.PW !== formData.confirmPW,
      nickname: !formData.nickname,
      name: !formData.name,
      Phone: !formData.Phone || !validatePhone(formData.Phone),
      Birth: !formData.Birth,
    };
    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error);
  };

  return { errors, updateErrors, checkErrors };
};
