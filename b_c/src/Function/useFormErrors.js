// src/hooks/useFormErrors.js
import { useState } from "react";

export const handleChangeWithErrorCheck = (
  e,
  handleChange,
  updateErrors,
  formData
) => {
  const { name, value } = e.target;
  handleChange(e);
  updateErrors(name, value, formData);
};
//회원가입
export const handleSubmit_Sign_Up = (
  e,
  formData,
  checkErrors,
  Sign_Up,
  setFormData,
  navigate
) => {
  e.preventDefault();
  const hasErrors = checkErrors(formData);
  if (!hasErrors) {
    Sign_Up(formData, setFormData, navigate);
  }
};
//아이디 찾기
export const handleSubmit_Find_ID = (
  e,
  formData,
  checkErrors,
  Find_ID,
  setFormData,
  navigate
) => {
  e.preventDefault();
  const hasErrors = checkErrors(formData);
  if (!hasErrors) {
    Find_ID(formData, setFormData, navigate);
  }
};
//비밀번호 찾기
export const handleSubmit_Find_PW = (
  e,
  formData,
  checkErrors,
  Find_PW,
  setFormData,
  navigate
) => {
  e.preventDefault();
  const hasErrors = checkErrors(formData);
  if (!hasErrors) {
    Find_PW(formData, setFormData, navigate);
  }
};

//회원가입
export const useFormErrors_SignUP = (initialState) => {
  const [errors, setErrors] = useState(initialState);

  const validatePhone = (phone) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const updateErrors = (name, value, formData) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "ID") newErrors.ID = !value;
      if (name === "PW") newErrors.PW = !value;
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
      ID: !formData.ID,
      PW: !formData.PW,
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

//비밀번호 찾기
export const useFormErrors_FindPW = (initialState) => {
  const [errors, setErrors] = useState(initialState);

  const validatePhone = (phone) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const updateErrors = (name, value, formData) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (name === "ID") newErrors.ID = !value;
      if (name === "Phone") newErrors.Phone = !validatePhone(value);
      return newErrors;
    });
  };

  const checkErrors = (formData) => {
    const newErrors = {
      ID: !formData.ID,
      Phone: !formData.Phone || !validatePhone(formData.Phone),
    };
    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error);
  };

  return { errors, updateErrors, checkErrors };
};
