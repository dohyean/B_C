import React from "react";
import Menubar from "../Menubar";
import "../../Style/CreateBlog.css";

function CreateBlog() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-header-CreateBlog">
        <div className="CreateBlog-container">
          <div className="high-section">
            <div className="high-section-a1">
              블로그 작성할 때 각종 기능이 들어갈 자리
            </div>
          </div>
          <div className="mid-section">
            <div className="mid-section-a1">
              <textarea
                className="mid-section-title"
                placeholder="제목"
              ></textarea>
              <textarea
                className="mid-section-content"
                placeholder="글 + 사진"
              ></textarea>
            </div>
          </div>
          <div className="low-section">아래</div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
