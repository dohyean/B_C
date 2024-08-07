import React, { useRef } from "react";
import "quill/dist/quill.snow.css";
import Toolbar from "./Function/Toolbar"; // Toolbar 컴포넌트 임포트
import useQuill from "./Function/useQuill"; // useQuill 훅 임포트
import "../../Style/CreateBlog.css";
import Menubar from "../Menubar";

function CreateBlog() {
  const quillRef = useRef(null);
  const toolbarRef = useRef(null);

  // const submit = () => {
  //   const socket = require("../moudle/sockets.js");
  //   console.log(FormData);
  //   socket.Test_Server(FormData);
  // };

  // 커스텀 훅 사용
  useQuill(quillRef, toolbarRef);

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-header-CreateBlog">
        <div className="CreateBlog-container">
          <div className="high-section">
            <Toolbar ref={toolbarRef} />
          </div>
          <div className="mid-section">
            <div className="mid-section-a1">
              <textarea className="mid-section-title" placeholder="제목" />
              <div className="mid-section-content" ref={quillRef}>
                {/* Quill 에디터가 이 div에 렌더링됩니다. */}
              </div>
            </div>
          </div>
          <div className="low-section">아래</div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
