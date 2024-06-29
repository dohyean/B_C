import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import Menubar from "./Menubar";

function SignUp() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  /*const [text, setText] = useState("");*/

  const [formData, setFormData] = useState({
    ID: "",
    PW: "",
    confirmPW: "",
    nickname: "",
    name: "",
    Phone: "",
    Birth: "",
  });

  /*const handleChange = (event) => {
    setFormData(event.target.value);
  };*/

  const Sign_Up = () => {
    if (formData.PW.length < 8 || formData.PW.length > 32) {
      alert("비밀번호를 8~32자로 작성해주세요.");
      return;
    }

    if (formData.PW !== formData.confirmPW) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert(JSON.stringify(formData));

    // 회원 가입 성공 시 초기화
    setFormData({
      ID: "",
      PW: "",
      confirmPW: "",
      nickname: "",
      name: "",
      Phone: "",
      Birth: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-SignUp">
        <div>
          <input
            name="ID"
            className="text"
            value={formData.ID}
            onChange={handleChange}
            placeholder="아이디"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            type="password"
            name="PW"
            className="text"
            value={formData.PW}
            onChange={handleChange}
            placeholder="비밀번호(8 ~ 32자)"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            type="password"
            name="confirmPW"
            className="text"
            value={formData.confirmPW}
            onChange={handleChange}
            placeholder="비밀번호 재입력"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            name="nickname"
            className="text"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="별명"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            name="name"
            className="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            name="Phone"
            className="text"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="전화번호"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            name="Birth"
            type="date"
            className="text"
            value={formData.Birth}
            onChange={handleChange}
            placeholder="생년월일 (YYYY/MM/DD)"
          />
        </div>
        &nbsp;
        <button onClick={Sign_Up} className="SignUp-button-SignUp">
          회원 가입
        </button>
      </div>
    </div>
  );
}

export default SignUp;
