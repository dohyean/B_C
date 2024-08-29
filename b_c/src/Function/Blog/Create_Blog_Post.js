const sockets = require("../../Component/module/sockets.js");

const Return_Success = 0;
const Return_Error = 1;

async function Check_Create_Blog_Post(
  blogData,
  setTitle,
  setContent,
  setVisibility,
  navigate
) {
  try {
    var BlogPostCreate_Server_Result = await sockets.BlogPostCreate_Server(
      blogData
    );
    switch (BlogPostCreate_Server_Result.PostCreate_Result) {
      case Return_Success:
        setTitle("");
        setContent("");
        setVisibility("public");
        alert("저장 완료.");
        navigate("/HomePageLogin");
        break;
      case Return_Error:
        alert("오류.");
        break;
      default:
        alert("관리자에게 문의하세요.");
        break;
    }
  } catch (err) {
    console.log("Change-PW error: ", err);
    alert("서버 오류. 다시 시도해 주세요.");
  }
}

export async function Create_Blog_Post(
  blogData,
  setTitle,
  setContent,
  setVisibility,
  navigate
) {
  await Check_Create_Blog_Post(
    blogData,
    setTitle,
    setContent,
    setVisibility,
    navigate
  );
}
