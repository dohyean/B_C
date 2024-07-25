import React, { useEffect } from "react";
import Menubar from "./Menubar";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/ChangePW.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { usePasswordToggle } from "../Function/usePasswordToggle";
import { useFormData } from "../Function/useFormData";
import { useFormErrors_ChangePW } from "../Function/ChangePW/useFormErrors_ChangePW";
import { handleSubmit_Change_PW } from "../Function/ChangePW/handleSubmit_Change_PW";
import { Change_PW } from "../Function/ChangePW/Change_PW";
import { handleChangeWithErrorCheck } from "../Function/SignUp/handleChangeWithErrorCheck";
import CredentialBar from "./CredentialBar";

function ChangePW() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {}; // 전달된 상태 객체

  // 상태 객체에서 selectedID와 Phone을 추출
  const { selectedID, Phone, ID } = state;

  useEffect(() => {
    console.log("Received selectedID:", selectedID); // 데이터 로그 출력
    console.log("Received Phone:", Phone); // 데이터 로그 출력
    console.log("Received ID:", ID); // 데이터 로그 출력
  }, [selectedID, Phone, ID]);

  // useFormData 훅의 초기값으로 ID와 Phone을 설정
  const [formData, handleChange, setFormData] = useFormData({
    ID: selectedID || ID || "", // selectedID 또는 ID를 사용
    Phone: Phone || "",
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

  const {
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  } = usePasswordToggle();

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
      <Menubar />
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
          <div>
            <input
              type="text"
              id="Phone"
              name="Phone"
              className="text"
              value={formData.Phone}
              readOnly
            />
          </div>
          <div className="text-box"></div>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="PW"
              className="text password-input"
              value={formData.PW}
              onChange={handleInputChange}
              placeholder="새 비밀번호(8 ~ 32자) 및 특수문자 포함"
            />
            <span onClick={toggleShowPassword} className="password-icon">
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <div className="text-box">
            {errors.PW &&
              "비밀번호를 입력해 주세요(8 ~ 32자) 및 특수문자 포함."}
          </div>
          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPW"
              className="text"
              value={formData.confirmPW}
              onChange={handleInputChange}
              placeholder="비밀번호 재입력"
            />
            <span onClick={toggleShowConfirmPassword} className="password-icon">
              {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <div className="text-box">
            {errors.confirmPW && "비밀번호가 일치하지 않습니다."}
          </div>
          <button type="submit" className="changePW-button-changePW">
            변경하기
          </button>
        </form>
        <CredentialBar />
      </div>
    </div>
  );
}

export default ChangePW;
