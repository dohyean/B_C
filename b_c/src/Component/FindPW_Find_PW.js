export const Find_PW = (formData, setFormData, navigate) => {
  if (formData.ID === "") {
    alert("아이디를 입력하세요");
    return;
  } else if (formData.Phone === "") {
    alert("전화번호를 입력하세요");
    return;
  }
  alert(JSON.stringify(formData));
};
