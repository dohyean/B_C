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
