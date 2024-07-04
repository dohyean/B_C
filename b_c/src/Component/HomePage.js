import "../Style/HomePage.css";
import Menubar from "./Menubar";

function HomePage() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-Home">
        <div className="description">
          <p>페이지에 대한 설명</p>
        </div>
        <div className="image-section">
          <img alt="프로젝트 관련 사진 2~3장여름이사진dfsdfd" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
