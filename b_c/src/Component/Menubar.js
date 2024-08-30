import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/Menubar.css";
import MenubarLoginbefore from "../Function/Menubar/MenubarLoginbefore";
import MenubarLoginafter from "../Function/Menubar/MenubarLoginafter";

function Menubar() {
  //nickname 받기
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

  //로그인전 메뉴바 확인
  const start_page = ["/Login"];

  // 로그인된 메뉴바 확인
  const HomePageLoginPages = ["/HomePageLogin"]; // 로그인된 화면
  const Blog = ["/Blog"]; // 블로그
  const Community = ["/Community"]; // 커뮤니티
  const ChangeUserInfo = ["/ChangeUserInfo"];
  const CreatePost = ["/CreatePost"];
  const BlogManagePage = ["/BlogManagePage"];

  function page_check() {
    if (start_page.includes(location.pathname)) {
      return 1;
    }
    if (
      HomePageLoginPages.includes(location.pathname) ||
      Blog.includes(location.pathname) ||
      Community.includes(location.pathname) ||
      ChangeUserInfo.includes(location.pathname) ||
      CreatePost.includes(location.pathname) ||
      BlogManagePage.includes(location.pathname)
    ) {
      return 2;
    }
    return 0; // 기본값
  }

  if (page_check() === 1) {
    return <MenubarLoginbefore></MenubarLoginbefore>;
  } else if (page_check() === 2) {
    return <MenubarLoginafter></MenubarLoginafter>;
  } else {
    return (
      <header className="App-header">
        <h1 onClick={() => HandleClick("/")} style={{ cursor: "pointer" }}>
          ABCD
        </h1>
        <button onClick={() => HandleClick("/TestModule")}>모듈 테스트</button>
        <button
          onClick={() => HandleClick("/Login")}
          className="login-button-Home"
        >
          로그인
        </button>
      </header>
    );
  }
}

export default Menubar;
