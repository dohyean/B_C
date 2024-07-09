import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/Menubar.css";

function Menubar() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  var start_page = ["/Login"];
  const location = useLocation();

  function page_check() {
    for (var i = 0; i < start_page.length; i++) {
      if (location.pathname === start_page[i]) {
        return 1;
      }
    }
  }

  if (page_check() === 1) {
    return (
      <div>
        <header className="App-header">
          <h1 onClick={() => HandleClick("/")} style={{ cursor: "pointer" }}>
            ABCD
          </h1>
          <button
            onClick={() => HandleClick("/")}
            className="back-button-HomePage"
          >
            뒤로 가기
          </button>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <header className="App-header">
          <h1 onClick={() => HandleClick("/")} style={{ cursor: "pointer" }}>
            ABCD
          </h1>
          {/* <button onClick={() => HandleClick("/TestModule")}>
            모듈 테스트
          </button> */}
          <button
            onClick={() => HandleClick("/Login")}
            className="login-button-Home"
          >
            로그인
          </button>
        </header>
      </div>
    );
  }
}

export default Menubar;
