import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import Menubar from "./Menubar";
import { useFormData } from "../Function/useFormData";
import { Log_in } from "../Function/Login/Log_in";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { usePasswordToggle } from "../Function/usePasswordToggle";

function Login() {
  const navigate = useNavigate();

  const [formData, handleChange, setFormData] = useFormData({
    ID: "",
    PW: "",
  });

  const { showPassword, toggleShowPassword } = usePasswordToggle();

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content">
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
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="PW"
            className="text password-input"
            value={formData.PW}
            onChange={handleChange}
            placeholder="비밀번호"
          ></input>
          <span onClick={toggleShowPassword} className="password-icon">
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
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
            onClick={() => navigate("/FindID")}
            className="additional-button"
          >
            아이디 찾기
          </button>
          <button
            onClick={() => navigate("/FindPW")}
            className="additional-button"
          >
            패스워드 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
