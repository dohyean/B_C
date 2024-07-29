import "../../Style/SignUp.css";
import Menubar from "../Menubar";
const sockets = require("../moudle/sockets.js");

// SignUp을 그대로 가져와서 테스트
function TestModule() {
  const ID = "test";

  const check = () => {
    var formData = { ID: ID };
    const save = sockets.DeleteUser_Server(formData);
    alert(save);
  };

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-SignUp">
        <form className="signup-form">
          <div className="password-field">
            <input
              type={"password"}
              name="PW"
              className="text password-input"
              placeholder="아이디"
            ></input>
          </div>
          <button
            type="submit"
            onClick={check}
            className="SignUp-button-SignUp"
          >
            제거
          </button>
        </form>
      </div>
    </div>
  );
}

export default TestModule;
