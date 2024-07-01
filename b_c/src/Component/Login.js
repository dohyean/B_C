import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import Menubar from "./Menubar";

function Login() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  const HandleClick_login = (url) => {
    alert(JSON.stringify(formData));
    navigate(url);
  };

  const [formData, setFormData] = useState({
    ID: "",
    PW: "",
  });

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
      <div className="App-content">
        <div>
          <textarea
            name="ID"
            className="text"
            value={formData.ID}
            onChange={handleChange}
            placeholder="아이디"
          ></textarea>
        </div>
        &nbsp;
        <div>
          <textarea
            name="PW"
            className="text"
            value={formData.PW}
            onChange={handleChange}
            placeholder="비밀번호"
          ></textarea>
        </div>
        &nbsp;
        <button
          onClick={() => HandleClick_login("/HomePageLogin")}
          className="login-button-login"
        >
          로그인
        </button>
        <div className="additional-buttons">
          <button
            onClick={() => HandleClick("/SignUp")}
            className="additional-button"
          >
            회원가입
          </button>
          <button
            onClick={() => HandleClick("/FindINFO")}
            className="additional-button"
          >
            아이디/패스워드 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
