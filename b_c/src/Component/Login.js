import { Link, useNavigate } from "react-router-dom";
import "../Style/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // 여기에 이동하고 싶은 경로를 입력하세요.
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={handleClick} style={{ cursor: "pointer" }}>
          ABCD
        </h1>
        <Link to="/">
          <button className="back-button-HomePage">뒤로 가기</button>
        </Link>
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
        <Link to="/HomePageLogin">
          <button className="login-button-login">로그인</button>
        </Link>
        <div className="additional-buttons">
          <Link to="/SignUp">
            <button className="additional-button">회원가입</button>
          </Link>
          <Link to="/FindPW">
            <button className="additional-button">아이디/패스워드 찾기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
