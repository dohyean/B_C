import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/Menubar.css";

function Menubar() {
  const navigate = useNavigate();
  const location = useLocation();

  const HandleClick = (url) => {
    if (location.pathname === url) {
      // 새로고침 기능
      window.location.reload();
    } else {
      navigate(url);
    }
  };

  var start_page = ["/Login"];
  var HomePageLogin = ["/HomePageLogin"]; // 로그인된 화면
  var Blog = ["/Blog"]; // 블로그
  var Community = ["/Community"]; // 커뮤니티
  var ChangeUserInfo = ["/ChangeUserInfo"];

  function page_check() {
    for (var i = 0; i < start_page.length; i++) {
      if (location.pathname === start_page[i]) {
        return 1;
      }
      if (
        location.pathname === HomePageLogin[i] ||
        location.pathname === Blog[i] ||
        location.pathname === Community[i] ||
        location.pathname === ChangeUserInfo[i]
      ) {
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
              <div className="dropdown">
                <h1 style={{ cursor: "pointer" }}>
                  블로그
                  <div className="dropdown-content">
                    <h4
                      onClick={() => HandleClick("/Blog")}
                      style={{ cursor: "pointer" }}
                    >
                      블로그
                    </h4>
                    <h5
                      onClick={() => HandleClick("/MakeBlog")}
                      style={{ cursor: "pointer" }}
                    >
                      블로그 작성
                    </h5>
                  </div>
                </h1>
              </div>
              <div className="dropdown">
                <h1 style={{ cursor: "pointer" }}>
                  커뮤니티
                  <div className="dropdown-content">
                    <h4
                      onClick={() => HandleClick("/Community")}
                      style={{ cursor: "pointer" }}
                    >
                      커뮤니티
                    </h4>
                    <h5
                      onClick={() => HandleClick("/MakeCommunity")}
                      style={{ cursor: "pointer" }}
                    >
                      커뮤니티 작성
                    </h5>
                  </div>
                </h1>
              </div>
              <div className="dropdown">
                <h1 style={{ cursor: "pointer" }}>
                  이름
                  <div className="dropdown-content">
                    <h4
                      onClick={() => HandleClick("/Community")}
                      style={{ cursor: "pointer" }}
                    >
                      내 글
                    </h4>
                    <h5
                      onClick={() => HandleClick("/ChangeUserInfo")}
                      style={{ cursor: "pointer" }}
                    >
                      개인정보 변경
                    </h5>
                  </div>
                </h1>
              </div>
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
