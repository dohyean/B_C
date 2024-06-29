import "../Style/FindINFO.css";
import Menubar from "./Menubar";
import FindID from "./FindID";
import FindPW from "./FindPW";

function FindINFO() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-FindINFO">
        <FindID></FindID>
        <div className="divider"></div>
        <FindPW></FindPW>
      </div>
    </div>
  );
}

export default FindINFO;
