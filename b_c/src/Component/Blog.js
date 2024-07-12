import React from "react";
import "../Style/Blog.css";
import Menubar from "./Menubar";

function Blog() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-Blog">
        <h1>앙전도띠</h1>
      </div>
    </div>
  );
}

export default Blog;
