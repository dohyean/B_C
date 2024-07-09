import React from "react";
import "../Style/FindPW.css";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Function/useFormData";
import { Find_PW } from "../Function/FindPW/Find_PW";
import { handleChangeWithErrorCheck } from "../Function/FindPW/handleChangeWithErrorCheck";
import { useFormErrors_FindPW } from "../Function/FindPW/useFormErrors_FindPW";
import { handleSubmit_Find_PW } from "../Function/FindPW/handleSubmit_Find_PW";

function FindPW() {
  const navigate = useNavigate();
  const [formData, handleChange, setFormData] = useFormData({
    ID: "",
    Phone: "",
  });
  const { errors, updateErrors, checkErrors } = useFormErrors_FindPW({
    ID: false,
    Phone: false,
  });

  const handleInputChange = (e) => {
    handleChangeWithErrorCheck(e, handleChange, updateErrors, formData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit_Find_PW(
      e,
      formData,
      checkErrors,
      Find_PW,
      setFormData,
      navigate
    );
  };

  return (
    <div className="FindPW-section">
      <h2>비밀번호 찾기</h2>
      <form onSubmit={handleFormSubmit} className="signup-form-PW">
        <input
          name="ID"
          className="text"
          value={formData.ID}
          onChange={handleInputChange}
          placeholder="아이디"
        />
        <div className="text-box">{errors.ID && "아이디를 입력해 주세요."}</div>
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
        <button type="submit" className="FindPW-button-FindPW">
          찾기
        </button>
      </form>
    </div>
  );
}

export default FindPW;
