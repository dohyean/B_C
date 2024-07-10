import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/Menubar.css";

function Menubar() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  var start_page = ["/Login"];
  var Anjeon_Dotti = ["/HomePageLogin"];
  const location = useLocation();

  function page_check() {
    for (var i = 0; i < start_page.length; i++) {
      if (location.pathname === start_page[i]) {
        return 1;
      }
      if (location.pathname === Anjeon_Dotti[i]) {
        return 2;
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
  } else if (page_check() === 2) {
    return (
      <div>
        <header className="App-header">
          <h1
            onClick={() => HandleClick("/HomePageLogin")}
            style={{ cursor: "pointer" }}
          >
            ABCD
          </h1>
          <div className="menu-container">
            <div className="menu-items">
              <h1
                onClick={() => HandleClick("/Blog")}
                style={{ cursor: "pointer" }}
              >
                블로그
              </h1>
              <h1
                onClick={() => HandleClick("/Blog")}
                style={{ cursor: "pointer" }}
              >
                커뮤니티
              </h1>
              <h1>이름</h1>
            </div>
            <button
              onClick={() => HandleClick("/")}
              className="back-button-HomePage logout-button"
            >
              로그아웃
            </button>
          </div>
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
          <button onClick={() => HandleClick("/TestModule")}>
            모듈 테스트
          </button>
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
