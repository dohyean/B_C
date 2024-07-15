import { useNavigate } from "react-router-dom";
import "../../Style/SignUp.css";
import Menubar from "../Menubar";
import createHmac from "crypto-js";

// SignUp을 그대로 가져와서 테스트
function TestModule() {
  const navigate = useNavigate();

  const PW = "test";
  const test = "abcdefg";
  const check = () => {
    const hashPW = createHmac 
    alert(`test : ${hashPW}`);
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
            value={PW}
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
