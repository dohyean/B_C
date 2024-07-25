import React from "react";
import "../Style/Blog.css";
import Menubar from "./Menubar";

function Blog() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-Blog">
        <div className="split-container">
          <div className="left-section">여기는 왼쪽</div>
          <div className="right-section">여기는 오른쪽</div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
