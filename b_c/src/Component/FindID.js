import React from "react";
import "../Style/FindID.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Function/useFormData";
import { Find_ID } from "../Function/FindID/Find_ID";
import { handleChangeWithErrorCheck } from "../Function/FindID/handleChangeWithErrorCheck";
import { useFormErrors_FindID } from "../Function/FindID/useFormErrors_FindID";
import { handleSubmit_Find_ID } from "../Function/FindID/handleSubmit_Find_ID";

function FindID() {
  const navigate = useNavigate();
  const [formData, handleChange, setFormData] = useFormData({
    Phone: "",
  });

  const { errors, updateErrors, checkErrors } = useFormErrors_FindID({
    Phone: false,
  });

  const handleInputChange = (e) => {
    handleChangeWithErrorCheck(e, handleChange, updateErrors, formData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit_Find_ID(
      e,
      formData,
      checkErrors,
      Find_ID,
      setFormData,
      navigate
    );
  };

  return (
    <div className="FindID-section">
      <h2>아이디 찾기</h2>
      &nbsp;
      <form onSubmit={handleFormSubmit} className="signup-form">
        <input
          name="Phone"
          className="text"
          value={formData.Phone}
          onChange={handleInputChange}
          placeholder="전화번호"
        />
        <div className="text-box">
          {errors.Phone && "형식이 올바르지 않습니다. 예: 010-1234-5678"}
        </div>
        <button type="submit" className="FindID-button-FindID">
          찾기
        </button>
      </form>
    </div>
  );
}

export default FindID;
