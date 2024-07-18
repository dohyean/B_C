import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Credential_bar.css";

function CredentialBar() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  return (
    <div className="additional-buttons">
      <button
        onClick={() => HandleClick("/SignUp")}
        className="additional-button"
      >
        회원가입
      </button>
      <button
        onClick={() => HandleClick("/FindID")}
        className="additional-button"
      >
        아이디 찾기
      </button>
      <button
        onClick={() => HandleClick("/FindPW")}
        className="additional-button"
      >
        비밀번호 찾기
      </button>
    </div>
  );
}

export default CredentialBar;
