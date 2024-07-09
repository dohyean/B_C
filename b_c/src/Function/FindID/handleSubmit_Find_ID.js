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
