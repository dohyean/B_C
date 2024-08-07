import { useState } from "react";

//비밀번호 찾기
export const useFormErrors_FindPW = (initialState) => {
  const [errors, setErrors] = useState(initialState);

  const validatePhone = (phone) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
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
      if (name === "Phone") newErrors.Phone = !validatePhone(value);
      return newErrors;
    });
  };

  const checkErrors = (formData) => {
    const newErrors = {
      ID: !formData.ID || !validateID(formData.ID),
      Phone: !formData.Phone || !validatePhone(formData.Phone),
    };
    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error);
  };

  return { errors, updateErrors, checkErrors };
};
