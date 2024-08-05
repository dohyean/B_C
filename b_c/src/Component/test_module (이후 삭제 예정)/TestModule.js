import React, { useState } from "react";
import axios from "axios";
const sockets = require("../../Component/moudle/sockets.js");

function TestModule() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.innerHTML);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const insertLink = () => {
    const url = prompt("Enter the URL");
    const linkText = prompt("Enter the link text");
    if (url && linkText) {
      document.execCommand("createLink", false, url);
      document.execCommand("insertText", false, linkText);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      setPosts.append("");
    }
    const formData = {
      ID: "test",
      Category_Name: "wow",
      Category_PID: 0,
      Category_Child_Num: 0,
    };
    try {
      sockets.CategoryCreate_Server(formData);
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  return (
    <div className="App">
      <h1>블로그 게시물 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label>내용:</label>
          <div
            contentEditable
            className="editor"
            dangerouslySetInnerHTML={{ __html: content }}
            onInput={handleContentChange}
            onPaste={(e) => {
              // Handle image paste
              const items = e.clipboardData.items;
              for (let i = 0; i < items.length; i++) {
                if (
                  items[i].kind === "file" &&
                  items[i].type.includes("image")
                ) {
                  const file = items[i].getAsFile();
                  const formData = new FormData();
                  formData.append("image", file);

                  axios
                    .post("http://localhost:3000/upload", formData)
                    .then((response) => {
                      const imageUrl = response.data.imageUrl;
                      const img = document.createElement("img");
                      img.src = imageUrl;
                      img.alt = "Pasted Image";
                      document.execCommand("insertHTML", false, img.outerHTML);
                    })
                    .catch(() => console.error("Upload failed"));
                }
              }
            }}
          />
          <button type="button" onClick={insertLink}>
            링크 삽입
          </button>
        </div>
        <div>
          <label>파일 업로드:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">작성</button>
      </form>
      <h2>게시물 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {post.fileUrl && (
              <a href={post.fileUrl} download>
                파일 다운로드
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestModule;
