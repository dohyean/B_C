// useFormData.js
import { useState } from "react";

export const useFormData = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return [formData, handleChange, setFormData];
};
