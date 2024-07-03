import React from "react";
import "../Style/FindID.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "./useFormData";
import { Find_ID } from "./FindID_Find_ID";

function FindID() {
  const navigate = useNavigate();
  const [formData, handleChange, setFormData] = useFormData({
    Phone: "",
  });

  return (
    <div className="FindID-section">
      <h2>아이디 찾기</h2>
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
        onClick={() => Find_ID(formData, setFormData, navigate)}
        className="FindID-button-FindID"
      >
        찾기
      </button>
    </div>
  );
}

export default FindID;
