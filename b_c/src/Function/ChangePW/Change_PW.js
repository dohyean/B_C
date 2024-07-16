export const Change_PW = (formData, setFormData, navigate) => {
  alert(JSON.stringify(formData));
  setFormData({
    PW: "",
    confirmPW: "",
  });
  navigate("/ChangePW");
};
