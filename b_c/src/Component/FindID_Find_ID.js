//Find_ID_fuction.js
export const Find_ID = (formData, setFormData, navigate) => {
  if (formData.Phone === "") {
    alert("전화번호를 입력하세요");
    return;
  }

  alert(JSON.stringify(formData));
};
