import Menubar from "./Menubar";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/SelectID.css";
import CredentialBar from "./CredentialBar";

function SelectID() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const state = location.state; // 전달된 상태 객체
  // console.log("Received state:", state);
  const String_ID = state?.String_ID; // 상태 객체에서 String_ID를 추출
  console.log("Received String_ID:", String_ID);

  useEffect(() => {
    if (location.state && location.state.String_ID) {
      console.log("Received String_ID:", location.state.String_ID); // 데이터 로그 출력
      const optionsArray = location.state.String_ID.split("\n").filter(Boolean);
      setOptions(optionsArray);
      if (optionsArray.length > 0) {
        setSelectedOption(optionsArray[0]);
      }
    } else {
      console.log("No String_ID found in location.state"); //사실상 안넘오는 단계
    }
  }, [location.state]);

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
          확인
        </button>
        <CredentialBar />
      </div>
    </div>
  );
}

export default SelectID;
