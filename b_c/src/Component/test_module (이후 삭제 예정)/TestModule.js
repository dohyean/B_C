import "../../Style/SignUp.css";
import Menubar from "../Menubar";
import {HmacSHA256} from "crypto-js";
const sockets = require("../moudle/sockets.js");

async function find(PW) {
  const key = await sockets.SendHash_Server();
  const hashPW = HmacSHA256(PW, key.key).toString();
  alert(`${hashPW}`);
}

// SignUp을 그대로 가져와서 테스트
function TestModule() {
  const PW = "A";
  
  const check = () => {
    find(PW);
  }

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
            placeholder="비밀번호"
          ></input>
        </div>
        <button type="submit" onClick={check}className="SignUp-button-SignUp">
          회원 가입
        </button>
      </form>
    </div>
  </div>
  );
}

export default TestModule;
