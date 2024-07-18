import Menubar from "./Menubar";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Style/SelectID.css";
import CredentialBar from "./CredentialBar";

function SelectID() {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // useLocation을 통해 전달된 데이터 확인 및 설정
    if (location.state && location.state.String_ID) {
      // String_ID 데이터를 줄바꿈을 기준으로 배열로 변환
      const optionsArray = location.state.String_ID.split("\n").filter(Boolean);
      // options 상태 업데이트
      setOptions(optionsArray);
      // 첫 번째 옵션을 선택된 값으로 설정
      if (optionsArray.length > 0) {
        setSelectedOption(optionsArray[0]);
      }
    }
  }, [location.state]);

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-SelectID ">
        <form>
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

        <CredentialBar></CredentialBar>
      </div>
    </div>
  );
}

export default SelectID;
