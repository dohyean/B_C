const sockets = require("../../Component/module/sockets.js");

function TestModule() {
  const submit = () => {
    const formData = {
      Blog_ID: 2,
    };
    sockets.BlogDelete_Server(formData);
  };

  return (
    <div className="App">
      <button onClick={submit}>버튼 체크</button>
    </div>
  );
}

export default TestModule;
