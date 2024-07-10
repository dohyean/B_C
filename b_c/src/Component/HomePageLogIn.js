import "../Style/HomePageLogin.css";
import Menubar from "./Menubar";
import { getRandomImages } from "../Function/shuffleImages";

function HomePageLogin() {
  const images = getRandomImages();
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-Home">
        <div className="description">
          <p>페이지에 대한 설명</p>
        </div>
        <div className="image-section">
          {images.map((image, index) => (
            <div className="image-quarter" key={index}>
              <img src={image} alt={`프로젝트 관련 사진 ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageLogin;
