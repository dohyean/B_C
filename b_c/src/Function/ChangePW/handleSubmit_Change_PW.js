//비밀번호 찾기
export const handleSubmit_Change_PW = (
  e,
  formData,
  checkErrors,
  Change_PW,
  setFormData,
  navigate
) => {
  e.preventDefault();
  const hasErrors = checkErrors(formData);
  if (!hasErrors) {
    Change_PW(formData, setFormData, navigate);
  }
};
