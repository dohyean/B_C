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

  console.log("Blog Data:", blogData);

  // 데이터 처리 후 필드 초기화
  setTitle("");
  setContent("");
  setVisibility("public");

  navigate("/HomePageLogin");

  // 여기서 서버에 데이터를 보내거나 로컬 저장소에 저장하는 로직을 추가할 수 있습니다.
  // 예를 들어 fetch 또는 axios를 사용하여 서버에 요청을 보낼 수 있습니다.
};
