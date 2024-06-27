import "../Style/FindPW.css";
import Menubar from "./Menubar";

function FindPW() {
  return (
    <div className="App">
      <Menubar></Menubar>
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
