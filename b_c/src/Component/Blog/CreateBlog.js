import React, { useRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Style/CreateBlog.css";
import Menubar from "../Menubar";

const CreateBlog = () => {
  const quillRef = useRef(null);
  const [editorHeight, setEditorHeight] = useState(300); // 초기 높이 설정

  useEffect(() => {
    const quill = quillRef.current;
    if (quill) {
      const editorElement = quill.getEditor().container;

      // 에디터의 높이를 자동으로 조정하는 함수
      const adjustEditorHeight = () => {
        const newHeight = editorElement.scrollHeight;
        setEditorHeight(newHeight);
      };

      // Quill 에디터의 내용이 변경될 때마다 높이 조정
      quill.getEditor().on("text-change", adjustEditorHeight);

      // 초기 높이 조정
      adjustEditorHeight();

      // Cleanup 리스너
      return () => {
        if (quill) {
          quill.getEditor().off("text-change", adjustEditorHeight);
        }
      };
    }
  }, [quillRef]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      ["image"],
      ["clean"], // formatting remove button
    ],
  };

  return (
    <div className="App-CreateBlog">
      <Menubar />
      <div className="high-section"></div>
      <div className="mid-section-a1-title">
        <textarea className="mid-section-a1-title-a1" placeholder="제목" />
      </div>
      <div className="mid-section" style={{ height: `${editorHeight}px` }}>
        <div className="mid-section-a1">
          <ReactQuill
            ref={quillRef}
            className="mid-section-content"
            modules={modules}
            placeholder="여기에 내용을 입력하세요"
          />
        </div>
      </div>
      <div className="low-section"></div>
      <div className="low-section-a1">하이요 안녕</div>
    </div>
  );
};

export default CreateBlog;
