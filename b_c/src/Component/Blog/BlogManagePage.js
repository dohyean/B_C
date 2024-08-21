// import Menubar from "../Menubar";
// import "../../Style/BlogManagePage.css";

// function BlogManagePage() {
//   return (
//     <div className="App-BlogManagePage">
//       <Menubar></Menubar>
//       <div className="BlogManagePage-high-section"></div>
//       <div className="BlogManagePage-mid-section-a1">Blog</div>
//       <div className="BlogManagePage-mid-section-a2">
//         <div className="BlogManagePage-mid-section-a2-b1">
//           <div>Blogname</div>
//           <div>수정</div>
//           <div>관리</div>
//           <div>삭제</div>
//         </div>
//       </div>
//       <div className="BlogManagePage-mid-section-a3">
//         <div className="BlogManagePage-mid-section-a3-b1">
//           <div>dfasdf</div>
//           <div>fsdfasdf</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogManagePage;

// import Menubar from "../Menubar";
// import "../../Style/BlogManagePage.css";

// function BlogManagePage() {
//   const blogItems = ["Blog", "Blog1", "Blog2", "Blog4"]; // 예시 블로그 항목들
//   const handleEdit = (blog) => {
//     console.log("Edit:", blog);
//   };

//   const handleManage = (blog) => {
//     console.log("Manage:", blog);
//   };

//   const handleDelete = (blog) => {
//     console.log("Delete:", blog);
//   };

//   return (
//     <div className="App-BlogManagePage">
//       <Menubar></Menubar>
//       <div className="BlogManagePage-high-section"></div>
//       <div className="BlogManagePage-mid-section-a1">Blog</div>
//       <div className="BlogManagePage-mid-section-a2">
//         <div className="BlogManagePage-mid-section-a2-b1">
//           <div>Blogname</div>
//           <div>수정</div>
//           <div>관리</div>
//           <div>삭제</div>
//         </div>
//       </div>
//       <div className="BlogManagePage-mid-section-a3">
//         {blogItems.map((blog, index) => (
//           <div key={index} className="BlogManagePage-mid-section-a3-b1">
//             <div>{blog}</div>

//             <button onClick={() => handleEdit(blog)}>수정</button>
//             <button onClick={() => handleManage(blog)}>관리</button>
//             <button onClick={() => handleDelete(blog)}>삭제</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BlogManagePage;

import React, { useState, useEffect } from "react";
import Menubar from "../Menubar";
import "../../Style/BlogManagePage.css";

function BlogManagePage() {
  // 컴포넌트가 처음 로드될 때 로컬 스토리지에서 블로그 목록을 불러옴
  const [blogItems, setBlogItems] = useState(() => {
    const savedBlogs = localStorage.getItem("blogItems");
    return savedBlogs
      ? JSON.parse(savedBlogs)
      : ["Blog", "Blog1", "Blog2", "Blog4"];
  });
  const [newBlogName, setNewBlogName] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // blogItems가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem("blogItems", JSON.stringify(blogItems));
  }, [blogItems]);

  const handleEdit = (blog) => {
    console.log("Edit:", blog);
  };

  const handleManage = (blog) => {
    console.log("Manage:", blog);
  };

  const handleDelete = (blog) => {
    const updatedBlogs = blogItems.filter((item) => item !== blog);
    setBlogItems(updatedBlogs);
  };

  const handleAddBlog = () => {
    if (newBlogName.trim() !== "") {
      setBlogItems([...blogItems, newBlogName]);
      setNewBlogName("");
      setIsAdding(false);
    }
  };

  return (
    <div className="App-BlogManagePage">
      <Menubar />
      <div className="BlogManagePage-high-section"></div>
      <div className="BlogManagePage-mid-section-a1">Blog</div>
      <div className="BlogManagePage-mid-section-a2"></div>
      <div className="BlogManagePage-mid-section-a2">
        <div className="BlogManagePage-mid-section-a2-b1">
          <div style={{ position: "absolute", left: "423px" }}>Blogname</div>
          <div style={{ position: "absolute", left: "720px" }}>수정</div>
          <div style={{ position: "absolute", left: "970px" }}>관리</div>
          <div style={{ position: "absolute", left: "1200px" }}>삭제</div>
        </div>
      </div>
      <div className="BlogManagePage-mid-section-a3">
        {blogItems.map((blog, index) => (
          <div key={index} className="BlogManagePage-mid-section-a3-b1">
            <div className="BlogManagePage-mid-section-a3-b1-button blog-text-item">
              {blog}
            </div>
            <button
              className="BlogManagePage-mid-section-a3-b1-button "
              style={{ position: "absolute", left: "720px" }}
              onClick={() => handleEdit(blog)}
            >
              수정
            </button>
            <button
              className="BlogManagePage-mid-section-a3-b1-button "
              style={{ position: "absolute", left: "970px" }}
              onClick={() => handleManage(blog)}
            >
              관리
            </button>
            <button
              className="BlogManagePage-mid-section-a3-b1-button "
              style={{ position: "absolute", left: "1200px" }}
              onClick={() => handleDelete(blog)}
            >
              삭제
            </button>
          </div>
        ))}
        {isAdding && (
          <div>
            <input
              type="text"
              value={newBlogName}
              onChange={(e) => setNewBlogName(e.target.value)}
              placeholder="블로그 이름"
            ></input>
            <button onClick={handleAddBlog}>생성</button>
          </div>
        )}
        <button className="add-blog-button" onClick={() => setIsAdding(true)}>
          +
        </button>
      </div>
    </div>
  );
}

export default BlogManagePage;
