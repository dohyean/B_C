import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";
import Menubar from "./Menubar";

function Login() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content">
        <div>
          <textarea className="text" placeholder="아이디"></textarea>
        </div>
        &nbsp;
        <div>
          <textarea className="text" placeholder="비밀번호"></textarea>
        </div>
        &nbsp;
        <button
          onClick={() => HandleClick("/HomePageLogin")}
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
            onClick={() => HandleClick("/FindPW")}
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
