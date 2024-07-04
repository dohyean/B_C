import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import Menubar from "./Menubar";
import { useFormData } from "../Function/useFormData";
import { Log_in } from "../Function/Login_Log_in";

function Login() {
  const navigate = useNavigate();

  const [formData, handleChange, setFormData] = useFormData({
    ID: "",
    PW: "",
  });

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
          onClick={() => Log_in(formData, setFormData, navigate)}
          className="login-button-login"
        >
          로그인
        </button>
        <div className="additional-buttons">
          <button
            onClick={() => navigate("/SignUp")}
            className="additional-button"
          >
            회원가입
          </button>
          <button
            onClick={() => navigate("/FindINFO")}
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
