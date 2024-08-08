const sockets = require("../../Component/moudle/sockets.js");

function TestModule() {
  const submit = () => {
    const formData = {
      Post_ID: 1,
    };
    sockets.BlogPostDelete_Server(formData);
  };

  return (
    <div className="App">
      <button onClick={submit}>버튼 체크</button>
    </div>
  );
}

export default TestModule;
