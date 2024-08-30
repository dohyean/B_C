import "./TestModule.css";
import Menubar from "../Menubar";
import Category_bar from "./function/category_bar.js";

function TestModule() {
  return (
    <div className="App">
      <div>
        <Menubar />
      </div>
      <div>
        <Category_bar />
      </div>
    </div>
  );
}

export default TestModule;
