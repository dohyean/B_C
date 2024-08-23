import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/Menubar.css";

function MenubarLoginafter() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  useEffect(() => {
    // 로컬 스토리지에서 닉네임 읽기
    const storedNickname = localStorage.getItem("nickname");
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const handleLogout = () => {
    // 로컬 스토리지에서 닉네임 제거 //아이디 제거
    localStorage.removeItem("nickname");
    localStorage.removeItem("id");
    navigate("/"); // 로그아웃 후 홈으로 이동
  };

  return (
    <header className="App-header">
      <h1
        onClick={() => handleClick("/HomePageLogin")}
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
                  onClick={() => handleClick("/Blog")}
                  style={{ cursor: "pointer" }}
                >
                  블로그
                </h4>
                <h5
                  onClick={() => handleClick("/CreatePost")}
                  style={{ cursor: "pointer" }}
                >
                  블로그 작성
                </h5>
                <h5
                  onClick={() => handleClick("/BlogManagePage")}
                  style={{ cursor: "pointer" }}
                >
                  블로그 관리 페이지
                </h5>
              </div>
            </h1>
          </div>
          <div className="dropdown">
            <h1 style={{ cursor: "pointer" }}>
              커뮤니티
              <div className="dropdown-content">
                <h4
                  onClick={() => handleClick("/Community")}
                  style={{ cursor: "pointer" }}
                >
                  커뮤니티
                </h4>
                <h5
                  onClick={() => handleClick("/MakeCommunity")}
                  style={{ cursor: "pointer" }}
                >
                  커뮤니티 작성
                </h5>
              </div>
            </h1>
          </div>
          <div className="dropdown">
            <h1 style={{ cursor: "pointer" }}>
              {nickname}님
              <div className="dropdown-content">
                <h4
                  onClick={() => handleClick("/Community")}
                  style={{ cursor: "pointer" }}
                >
                  내 글
                </h4>
                <h5
                  onClick={() => handleClick("/ChangeUserInfo")}
                  style={{ cursor: "pointer" }}
                >
                  개인정보 변경
                </h5>
              </div>
            </h1>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="back-button-HomePage logout-button"
        >
          로그아웃
        </button>
      </div>
    </header>
  );
}

export default MenubarLoginafter;
