import React from "react";
import { Routes, Route, Link } from "react-router-dom";
/* import "./Style/homepage.css"; 이거 왜 안되냐*/

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ABCD</h1>
        <Link to="/login">
          <button className="login-button">로그인</button>
        </Link>
      </header>
      <div className="App-content">
        <div className="description">
          <p>페이지에 대한 설명</p>
        </div>
        <div className="image-section">
          <img src={process.env.PUBLIC_URL + "/image.jpg"} alt="Description" />
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>로그인 페이지</h1>
      </header>
      <div className="App-content">
        <p>여기에 로그인 폼을 추가하세요.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
