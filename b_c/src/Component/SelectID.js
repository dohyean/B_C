import Menubar from "./Menubar";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/SelectID.css";
//import CredentialBar from "./CredentialBar";

function SelectID() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const state = location.state || {}; // 전달된 상태 객체
  const { String_ID, Phone } = state; // 상태 객체에서 String_ID와 Phone을 추출

  useEffect(() => {
    if (String_ID) {
      console.log("Received String_ID:", String_ID); // 데이터 로그 출력
      console.log("Received Phone:", Phone); // 데이터 로그 출력
      // const optionsArray = String_ID.split("\n").filter(Boolean);
      const optionsArray = String_ID.split("\n")
        .map((id) => id.replace(/\r/g, ""))
        .filter(Boolean);
      setOptions(optionsArray);
      if (optionsArray.length > 0) {
        setSelectedOption(optionsArray[0]);
      }
    } else {
      console.log("No String_ID found in location.state");
    }
  }, [String_ID, Phone]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <Menubar />
      <div className="App-content-SelectID">
        <h2>아이디 찾기</h2>
        {options.length > 0 ? (
          <form className="form_selectID">
            {options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="selection"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </form>
        ) : (
          <p>아이디가 없습니다.</p> //아이디가 없는 경우(사실상 넘어오지않지만 혹시라도)
        )}
        <button
          className="Select-button-Select"
          onClick={() =>
            navigate("/Login", { state: { selectedID: selectedOption } })
          } //확인 버튼 누르면 로그인으로 가게 해둠
        >
          로그인
        </button>
        <button
          className="Select-button-Select"
          onClick={() =>
            navigate("/ChangePW", {
              state: { selectedID: selectedOption, Phone },
            })
          } //확인 버튼 누르면 로그인으로 가게 해둠
        >
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
}

export default SelectID;
