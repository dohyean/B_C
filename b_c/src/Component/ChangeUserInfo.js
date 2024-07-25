import Menubar from "./Menubar";
import "../Style/ChangeUserInfo.css";

function ChangeUserInfo() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-ChangeUserInfo">
        <h1>유저 정보 변경</h1>
      </div>
    </div>
  );
}

export default ChangeUserInfo;
