import React from "react";
import Menubar from "./Menubar";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/ChangePW.css";
import PasswordInputField from "../Function/ShowPassWord/PasswordInputField";
import { useFormData } from "../Function/useFormData";
import { useFormErrors_ChangePW } from "../Function/ChangePW/useFormErrors_ChangePW";
import { handleSubmit_Change_PW } from "../Function/ChangePW/handleSubmit_Change_PW";
import { Change_PW } from "../Function/ChangePW/Change_PW";
import { handleChangeWithErrorCheck } from "../Function/Common/handleChangeWithErrorCheck";
import CredentialBar from "./CredentialBar";

function ChangePW() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {}; // 전달된 상태 객체

  // 상태 객체에서 selectedID와 Phone을 추출
  const { ID } = state;

  // useFormData 훅의 초기값으로 ID와 Phone을 설정
  const [formData, handleChange, setFormData] = useFormData({
    ID: ID, // selectedID 또는 ID를 사용
    PW: "",
    confirmPW: "",
  });

  const { errors, updateErrors, checkErrors } = useFormErrors_ChangePW({
    PW: false,
    confirmPW: false,
  });

  const handleInputChange = (e) => {
    handleChangeWithErrorCheck(e, handleChange, updateErrors, formData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit_Change_PW(
      e,
      formData,
      checkErrors,
      Change_PW,
      setFormData,
      navigate
    );
  };

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-ChangePW">
        <h2>비밀번호 변경</h2>
        <form onSubmit={handleFormSubmit} className="changePW-form">
          <div>
            <input
              type="text"
              id="ID"
              name="ID"
              className="text"
              value={formData.ID}
              readOnly
            />
          </div>
          <div className="text-box"></div>
          <PasswordInputField
            name="PW"
            value={formData.PW}
            onChange={handleInputChange}
            error={
              errors.PW &&
              "비밀번호를 입력해 주세요(8 ~ 32자) 및 특수문자 포함."
            }
            placeholder="새 비밀번호(8 ~ 32자) 및 특수문자 포함"
          />
          <PasswordInputField
            name="confirmPW"
            value={formData.confirmPW}
            onChange={handleInputChange}
            error={errors.confirmPW && "비밀번호가 일치하지 않습니다."}
            placeholder="비밀번호 재입력"
          />
          <button type="submit" className="changePW-button-changePW">
            변경하기
          </button>
        </form>
        <CredentialBar></CredentialBar>
      </div>
    </div>
  );
}

export default ChangePW;
