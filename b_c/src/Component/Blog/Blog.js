import React from "react";
import "../../Style/Blog.css";
import Menubar from "../Menubar";

function Blog() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-Blog">
        <div className="split-container">
          <div className="left-section">
            <div className="left-container">
              <div className="left-section-1">Section 1</div>
              <div className="left-section-2">Section 2</div>
              <div className="left-section-3">Section 3</div>
              <div className="left-section-4">Section 4</div>
              <div className="left-section-5">Section 5</div>
              <div className="left-section-6">Section 6</div>
              <div className="left-section-7">Section 7</div>
              <div className="left-section-8">Section 8</div>
              <div className="left-section-9">Section 9</div>
              <div className="left-section-10">Section 10</div>
            </div>
          </div>
          <div className="right-section">
            <div className="right-container">
              <div className="right-section1">
                <div className="right-section1-a1">왼쪽</div>
                <div className="right-section1-a2">중간쪽</div>
                <div className="right-section1-a3">오른쪽</div>
              </div>
              <div className="right-section2">
                <div className="right-section2-a1">왼쪽</div>
                <div className="right-section2-a2">중간쪽</div>
              </div>
              <div className="right-section3">
                <div className="right-section3-a1">왼쪽</div>
                <div className="right-section3-a2">중간쪽</div>
                <div className="right-section3-a3">오른쪽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
