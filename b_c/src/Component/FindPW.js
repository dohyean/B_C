import React from "react";
import "../Style/FindPW.css";

function FindPW() {
  return (
    <div className="FindPW-section">
      <h2>비밀번호 찾기</h2>
      <input type="text" className="text" placeholder="아이디" />
      &nbsp;
      <input type="text" className="text" placeholder="전화번호" />
      &nbsp;
      <button className="FindPW-button-FindPW">찾기</button>
    </div>
  );
}

export default FindPW;
