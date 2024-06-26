import { Link } from "react-router-dom";
import "../Style/SignUp.css";

function SignUp() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>회원가입</h1>
        <Link to="/login">
          <button className="back-button-Login">뒤로 가기</button>
        </Link>
      </header>
      <div className="App-content-SignUp">
        <div>
          <textarea className="text" placeholder="아이디"></textarea>
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
        <Link to="/login">
          <button className="SignUp-button-SignUp">회원 가입</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
