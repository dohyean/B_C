const { Create_Blog_Post } = require("./Create_Blog_Post.js");

export const handleSubmit = (
  title,
  content,
  visibility,
  setTitle,
  setContent,
  setVisibility,
  navigate
) => {
  // 제목, 내용, 공개/비공개 상태를 수집
  const blogData = {
    title: title,
    content: content,
    visibility: visibility,
  };

  Create_Blog_Post(blogData, setTitle, setContent, setVisibility, navigate);
};
