import { Link, useNavigate } from "react-router-dom";
import "../Style/HomePage.css";

function HomePage() {
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
          <button className="login-button-Home">로그인</button>
        </Link>
      </header>
      <div className="App-content-Home">
        <div className="description">
          <p>페이지에 대한 설명</p>
        </div>
        <div className="image-section">
          <img
            src={process.env.PUBLIC_URL + "/image.jpg"}
            alt="프로젝트 관련 사진 2~3장"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
