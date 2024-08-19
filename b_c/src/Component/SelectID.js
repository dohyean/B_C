import Menubar from "./Menubar";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/SelectID.css";
import useStringID from "../Function/SelectID/useStringID";

function SelectID() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state || {}; // 전달된 상태 객체
  const { String_ID } = state; // 상태 객체에서 String_ID 추출

  const { options, selectedOption, setSelectedOption } = useStringID(String_ID); //아이디 받아와서 배열에 넣기

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App-SelectID">
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
          <p>아이디가 없습니다.</p>
        )}
        <button
          className="Select-button-Select"
          onClick={() => navigate("/Login", { state: { ID: selectedOption } })}
        >
          로그인
        </button>
        <button
          className="Select-button-Select"
          onClick={() =>
            navigate("/ChangePW", { state: { ID: selectedOption } })
          }
        >
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
}

export default SelectID;
