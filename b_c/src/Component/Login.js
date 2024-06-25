import { Link } from "react-router-dom";
import "../Style/Login.css";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>로그인 페이지</h1>
      </header>
      <div className="App-content">
        <div>
          <textarea className="text" placeholder="아이디"></textarea>
        </div>
        &nbsp;
        <div>
          <textarea className="text" placeholder="비밀번호"></textarea>
        </div>
        &nbsp;
        <Link to="/login">
          <button className="login-button-login">로그인</button>
        </Link>
        &nbsp;
      </div>
    </div>
  );
}

export default Login;
