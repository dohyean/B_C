const sockets = require("../../Component/moudle/sockets.js");

function TestModule() {
  const submit = () => {
    const formData = {
      Post_ID: 0,
      User_ID: "test",
      Comment: "댓글 테스트입니다.",
      Comment_Visibility_Status: 1,
      Comment_ID: 1,
    };
    sockets.CommentDelete_Server(formData);
  };

  return (
    <div className="App">
      <button onClick={submit}>버튼 체크</button>
    </div>
  );
}

export default TestModule;
