import React, { useRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Style/CreatePost.css";
import Menubar from "../Menubar";
import { handleSubmit } from "../../Function/Blog/handleSubmit_Create_Post"; // handleSubmit 함수 가져오기
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const quillRef = useRef(null);
  const [editorHeight, setEditorHeight] = useState(300); // 초기 높이 설정
  const [visibility, setVisibility] = useState(1); // 공개(1)을 메인으로 설정
  const [title, setTitle] = useState(""); // 제목 상태 관리
  const [content, setContent] = useState(""); // 에디터 내용 상태 관리

  const navigate = useNavigate(); // navigate 훅 정의

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

  const handleContentChange = (value) => {
    setContent(value); // 에디터 내용 업데이트
  };

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
      <Menubar></Menubar>
      <div className="high-section"></div>
      <div className="mid-section-a1-title">
        <textarea
          className="mid-section-a1-title-a1"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // 제목 입력 업데이트
        />
      </div>
      <div className="mid-section" style={{ height: `${editorHeight}px` }}>
        <div className="mid-section-a1">
          <ReactQuill
            ref={quillRef}
            className="mid-section-content"
            modules={modules}
            value={content}
            onChange={handleContentChange} // 에디터 내용 업데이트
            placeholder="여기에 내용을 입력하세요"
          />
        </div>
      </div>
      <div className="low-section"></div>
      <div className="low-section-select">
        <div className="low-section-select-a1">
          <label>
            <input
              type="radio"
              value={1}
              checked={visibility === 1}
              onChange={() => setVisibility(1)}
            />
            공개
          </label>
          <label>
            <input
              type="radio"
              value={0}
              checked={visibility === 0}
              onChange={() => setVisibility(0)}
            />
            비공개
          </label>
        </div>
      </div>
      <div className="low-section-a1">
        <div className="low-section-a2">
          <button
            className="Create-blog-button"
            onClick={() =>
              handleSubmit(
                title,
                content,
                visibility,
                setTitle,
                setContent,
                setVisibility,
                navigate
              )
            }
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
