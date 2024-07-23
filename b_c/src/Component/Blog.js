import React from "react";
import "../Style/Blog.css";
import Menubar from "./Menubar";

function Blog() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-Blog">
        <h1>블로그</h1>
      </div>
    </div>
  );
}

export default Blog;
