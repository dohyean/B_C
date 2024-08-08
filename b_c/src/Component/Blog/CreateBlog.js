// import React, { useRef } from "react";
// import "quill/dist/quill.snow.css";
// import Toolbar from "./Function/Toolbar"; // Toolbar 컴포넌트 임포트
// import useQuill from "./Function/useQuill"; // useQuill 훅 임포트
// import "../../Style/CreateBlog.css";
// import Menubar from "../Menubar";

// function CreateBlog() {
//   const quillRef = useRef(null);
//   const toolbarRef = useRef(null);

//   // const submit = () => {
//   //   const socket = require("../moudle/sockets.js");
//   //   console.log(FormData);
//   //   socket.Test_Server(FormData);
//   // };

//   // 커스텀 훅 사용
//   useQuill(quillRef, toolbarRef);

//   return (
//     <div className="App-CreateBlog">
//       <Menubar></Menubar>
//       <div className="high-section">
//         <Toolbar ref={toolbarRef} />
//       </div>
//       <div className="mid-section">
//         <div className="mid-section-a1">
//           <textarea className="mid-section-title" placeholder="제목" />
//           <div className="mid-section-content" ref={quillRef}>
//             {/* Quill 에디터가 이 div에 렌더링됩니다. */}
//           </div>
//         </div>
//       </div>
//       <div className="low-section">아래</div>
//     </div>
//   );
// }

// export default CreateBlog;

import React, { useRef, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import Toolbar from "./Function/Toolbar"; // Toolbar 컴포넌트 임포트
import ReactQuill from "react-quill"; // react-quill을 임포트
import "../../Style/CreateBlog.css";
import Menubar from "../Menubar";

function CreateBlog() {
  const quillRef = useRef(null);
  const toolbarRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const editorElement = quillRef.current.getEditor().container;

      // 휠 스크롤 비활성화
      const disableWheel = (e) => {
        e.preventDefault();
      };

      editorElement.addEventListener("wheel", disableWheel);

      // 에디터의 높이를 자동으로 조정하는 함수
      const adjustEditorHeight = () => {
        editorElement.style.height = "auto"; // 현재 높이 초기화
        editorElement.style.height = `${editorElement.scrollHeight}px`; // 스크롤 높이에 맞게 조정
      };

      // Quill 에디터의 내용이 변경될 때마다 높이 조정
      quillRef.current.getEditor().on("text-change", adjustEditorHeight);

      // 초기 높이 조정
      adjustEditorHeight();

      // Cleanup 리스너
      return () => {
        editorElement.removeEventListener("wheel", disableWheel);
        quillRef.current.getEditor().off("text-change", adjustEditorHeight);
      };
    }
  }, [quillRef]);

  return (
    <div className="App-CreateBlog">
      <Menubar />
      <div className="high-section">
        <Toolbar ref={toolbarRef} />
      </div>
      <div className="mid-section">
        <div className="mid-section-a1">
          <textarea className="mid-section-title" placeholder="제목" />
          <ReactQuill ref={quillRef} className="mid-section-content" />
        </div>
      </div>
      <div className="low-section">아래</div>
    </div>
  );
}

export default CreateBlog;
