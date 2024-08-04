import "../../Style/SignUp.css";
import Menubar from "../Menubar";
const sockets = require("../moudle/sockets.js");

// SignUp을 그대로 가져와서 테스트
function TestModule() {
  const check = () => {
    const ID = "test";
    const Blog_Name = "블로그 이름";
    const Blog_Description = "테스트입니다.";
    const Blog_Visibility_Status = 1;

    var formData = {
      ID: ID,
      Blog_Name: Blog_Name,
      Blog_Description: Blog_Description,
      Blog_Visibility_Status: Blog_Visibility_Status,
    };
    const save = sockets.BlogSave_Server(formData);
    alert(save);
  };

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-SignUp">
        <form className="signup-form">
          <button
            type="submit"
            onClick={check}
            className="SignUp-button-SignUp"
          >
            확인
          </button>
        </form>
      </div>
    </div>
  );
}

export default TestModule;
