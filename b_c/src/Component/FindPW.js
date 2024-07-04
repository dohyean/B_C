import React from "react";
import "../Style/FindPW.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Function/useFormData";
import { Find_PW } from "../Function/FindPW_Find_PW";

function FindPW() {
  const navigate = useNavigate();
  const [formData, handleChange, setFormData] = useFormData({
    ID: "",
    Phone: "",
  });
  return (
    <div className="FindPW-section">
      <h2>비밀번호 찾기</h2>
      <input
        name="ID"
        className="text"
        value={formData.ID}
        onChange={handleChange}
        placeholder="아이디"
      />
      &nbsp;
      <input
        name="Phone"
        className="text"
        value={formData.Phone}
        onChange={handleChange}
        placeholder="전화번호"
      />
      &nbsp;
      <button
        onClick={() => Find_PW(formData, setFormData, navigate)}
        className="FindPW-button-FindPW"
      >
        찾기
      </button>
    </div>
  );
}

export default FindPW;
