const sockets = require("../../Component/module/sockets.js");

function TestModule() {
  const submit = () => {
    const formData = {
      // Blog_ID: "3",
      // Post_Title: "post_3 test title",
      // Post_Content: "post_3 test content",
      // Post_Visibility_Status: 0,
    };
    sockets.BlogGet_Server(formData);
  };

  return (
    <div className="App">
      <button onClick={submit}>버튼 체크</button>
    </div>
  );
}

export default TestModule;
