import { Link, useNavigate } from "react-router-dom";
import "../Style/FindPW.css";

function FindPW() {
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
        <Link to="/login">
          <button className="back-button-Login">뒤로 가기</button>
        </Link>
      </header>
      <div className="App-content-FindPW">
        <div className="FindPW-section">
          <h2>아이디 찾기</h2>
          &nbsp;
          <input type="text" className="text" placeholder="전화번호" />
          &nbsp;
          <button className="FindPW-button-FindPW">찾기</button>
        </div>
        <div className="divider"></div>
        <div className="FindPW-section">
          <h2>비밀번호 찾기</h2>
          <input type="text" className="text" placeholder="아이디" />
          &nbsp;
          <input type="text" className="text" placeholder="전화번호" />
          &nbsp;
          <button className="FindPW-button-FindPW">찾기</button>
        </div>
      </div>
    </div>
  );
}

export default FindPW;
