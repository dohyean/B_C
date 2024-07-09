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
