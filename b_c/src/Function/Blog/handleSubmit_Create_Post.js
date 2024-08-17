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

  // 변수 명을 아예 바꿈
  // 위에 blogData를 -> PostData로 바꿀예정
  // 너 코드에 변수들이 blogData로 되어있어서 지금 당장 내가 맘대로 바꾸지는 않음
  // 코드에서 blogData에 해당하는거 PostData로 변경 요청
  // const PostData = {
  //   title: title,
  //   content: content,
  //   visibility: visibility,
  // };

  console.log(blogData);

  Create_Blog_Post(blogData, setTitle, setContent, setVisibility, navigate);
  //이런식으로 변경 요청
  // Create_Blog_Post(PostData, setTitle, setContent, setVisibility, navigate);
};
