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
