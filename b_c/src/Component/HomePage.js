import "../Style/HomePage.css";
import Menubar from "./Menubar";
import junsungImage from "../images/junsung.jpg";
import maplekingImage from "../images/mapleking.jpg";
import summerImage from "../images/summer.jpg";
import summer1Image from "../images/summer1.jpg";

function HomePage() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-Home">
        <div className="description">
          <p>made by 전도띠</p>
          <p>made by 권준성</p>
        </div>
        <div className="image-section">
          <div className="image-quarter">
            <img src={junsungImage} alt="사진 1" />
          </div>
          <div className="image-quarter">
            <img src={maplekingImage} alt="사진 2" />
          </div>
          <div className="image-quarter">
            <img src={summerImage} alt="사진 3" />
          </div>
          <div className="image-quarter">
            <img src={summer1Image} alt="사진 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
