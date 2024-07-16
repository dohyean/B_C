import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Credential_bar.css";

function CredentialBar() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  // function page_check() {
  //   for (var i = 0; i < Login.length; i++) {
  //     if (location.pathname === Login[i]) {
  //       return 1;
  //     }
  //     if (
  //       //이제 로그인이 되어있는 경우에 이동할 수 있는 경로
  //       location.pathname === HomePageLogin[i] ||
  //       location.pathname === Blog[i] ||
  //       location.pathname === Community[i]
  //     ) {
  //       return 2;
  //     }
  //   }
  // }

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
        패스워드 찾기
      </button>
    </div>
  );
}

export default CredentialBar;
