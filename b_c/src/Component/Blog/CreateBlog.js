import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Menubar from "../Menubar";
import "../../Style/CreateBlog.css";

function CreateBlog() {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      // Quill 초기화가 이미 되었는지 확인
      if (!quillRef.current.__quill) {
        new Quill(quillRef.current, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ["link", "image"],
              [{ size: [] }],
            ],
          },
        });
        quillRef.current.__quill = true; // Quill이 이미 초기화되었음을 기록
      }
    }
  }, []);

  return (
    <div className="App">
      <Menubar />
      <div className="App-header-CreateBlog">
        <div className="CreateBlog-container">
          <div className="high-section">
            <div className="high-section-a1">
              블로그 작성할 때 각종 기능이 들어갈 자리
            </div>
          </div>
          <div className="mid-section">
            <div className="mid-section-a1">
              <input
                className="mid-section-title"
                placeholder="제목"
                type="text"
              />
              <div
                className="mid-section-content"
                ref={quillRef} // Quill을 적용할 div
              >
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
