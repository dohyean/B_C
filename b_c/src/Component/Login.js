import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/Login.css";
import Menubar from "./Menubar";
import { useFormData } from "../Function/useFormData";
import { Log_in } from "../Function/Login/Log_in";
import PasswordInputField from "../Function/ShowPassWord/PasswordInputField";
import CredentialBar from "./CredentialBar";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, handleChange, setFormData] = useFormData({
    ID: location.state?.ID || "", // 전달된 ID를 초기값으로 설정
    PW: "",
  });

  useEffect(() => {
    if (location.state?.ID) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ID: location.state.ID,
      }));
    }
  }, [location.state, setFormData]);

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    Log_in(formData, setFormData, navigate);
  };

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="ID"
              className="text"
              value={formData.ID}
              onChange={handleChange}
              placeholder="아이디"
            />
          </div>
          &nbsp;
          <PasswordInputField
            name="PW"
            value={formData.PW}
            onChange={handleChange}
            placeholder="비밀번호"
          />
          &nbsp;
          <button
            type="submit" // 폼 제출 버튼으로 설정
            className="login-button-login"
          >
            로그인
          </button>
        </form>
        <div>
          <CredentialBar></CredentialBar>
        </div>
      </div>
    </div>
  );
}

export default Login;
