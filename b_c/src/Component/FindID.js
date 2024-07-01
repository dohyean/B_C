import React from "react";
import "../Style/FindID.css";

function FindID() {
  const Find_ID = () => {};

  return (
    <div className="FindID-section">
      <h2>아이디 찾기</h2>
      &nbsp;
      <input type="text" className="text" placeholder="전화번호" />
      &nbsp;
      <button className="FindID-button-FindID">찾기</button>
    </div>
  );
}

export default FindID;
