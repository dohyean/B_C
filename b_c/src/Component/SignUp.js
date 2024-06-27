import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import Menubar from "./Menubar";

function SignUp() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const Sign_Up = () => {
    alert(text);
  };

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-SignUp">
        <div>
          <textarea
            className="text"
            value={text}
            onChange={handleChange}
            placeholder="아이디"
          ></textarea>
        </div>
        &nbsp;
        <div>
          <textarea
            className="text"
            placeholder="비밀번호(8 ~ 32자)"
          ></textarea>
        </div>
        &nbsp;
        <div>
          <textarea className="text" placeholder="비밀번호 재입력"></textarea>
        </div>
        &nbsp;
        <div>
          <textarea className="text" placeholder="별명"></textarea>
        </div>
        &nbsp;
        <div>
          <textarea className="text" placeholder="이름"></textarea>
        </div>
        &nbsp;
        <div>
          <textarea className="text" placeholder="전화번호"></textarea>
        </div>
        &nbsp;
        <div>
          <input
            type="date"
            className="text"
            placeholder="생년월일 (YYYY/MM/DD)"
          />
        </div>
        &nbsp;
        <button onClick={Sign_Up} className="SignUp-button-SignUp">
          회원 가입
        </button>
      </div>
    </div>
  );
}

export default SignUp;
