import { useState } from "react";

//아이디 찾기
export const useFormErrors_FindID = (initialState) => {
  const [errors, setErrors] = useState(initialState);

  const validatePhone = (phone) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const updateErrors = (name, value, formData) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "Phone") newErrors.Phone = !validatePhone(value);
      return newErrors;
    });
  };

  const checkErrors = (formData) => {
    const newErrors = {
      Phone: !formData.Phone || !validatePhone(formData.Phone),
    };
    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error);
  };

  return { errors, updateErrors, checkErrors };
};
