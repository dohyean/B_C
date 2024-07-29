import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/Menubar.css";

function MenubarLoginbefore() {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <header className="App-header">
      <h1 onClick={() => handleClick("/")} style={{ cursor: "pointer" }}>
        ABCD
      </h1>
      <button onClick={() => handleClick("/")} className="back-button-HomePage">
        뒤로 가기
      </button>
    </header>
  );
}

export default MenubarLoginbefore;
