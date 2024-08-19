import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import Menubar from "./Menubar";
import PasswordInputField from "../Function/ShowPassWord/PasswordInputField";
import { Sign_Up } from "../Function/SignUp/Sign_up";
import { useFormData } from "../Function/useFormData";
import { handleChangeWithErrorCheck } from "../Function/Common/handleChangeWithErrorCheck";
import { useFormErrors_SignUP } from "../Function/SignUp/useFormErrors_SignUP";
import { handleSubmit_Sign_Up } from "../Function/SignUp/handleSubmit_Sign_Up";
import CredentialBar from "./CredentialBar";
import { MaxDate } from "../Function/SignUp/MaxDate";

function SignUp() {
  const navigate = useNavigate();
  const maxDate = MaxDate(); //날짜 제한 함수

  const [formData, handleChange, setFormData] = useFormData({
    ID: "",
    PW: "",
    confirmPW: "",
    nickname: "",
    name: "",
    Phone: "",
    Birth: "",
  });

  const { errors, updateErrors, checkErrors } = useFormErrors_SignUP({
    ID: false,
    PW: false,
    confirmPW: false,
    nickname: false,
    name: false,
    Phone: false,
    Birth: false,
  });

  const handleInputChange = (e) => {
    handleChangeWithErrorCheck(e, handleChange, updateErrors, formData);
  };

  const handleFormSubmit = (e) => {
    handleSubmit_Sign_Up(
      e,
      formData,
      checkErrors,
      Sign_Up,
      setFormData,
      navigate
    );
  };

  return (
    <div className="App-SignUp">
      <Menubar></Menubar>
      <div className="App-content-SignUp">
        <form onSubmit={handleFormSubmit} className="signup-form">
          <div>
            <input
              name="ID"
              className="text"
              value={formData.ID}
              onChange={handleInputChange}
              placeholder="아이디"
            ></input>
          </div>
          <div className="text-box">
            {errors.ID && "아이디를 입력해 주세요.(영문)"}
          </div>
          <PasswordInputField
            name="PW"
            value={formData.PW}
            onChange={handleInputChange}
            error={
              errors.PW &&
              "비밀번호를 입력해 주세요(8 ~ 32자) 및 특수문자 포함."
            }
            placeholder="비밀번호(8 ~ 32자) 및 특수문자 포함"
          />
          <PasswordInputField
            name="confirmPW"
            value={formData.confirmPW}
            onChange={handleInputChange}
            error={errors.confirmPW && "비밀번호가 일치하지 않습니다."}
            placeholder="비밀번호 재입력"
          />
          <div>
            <input
              name="nickname"
              className="text"
              value={formData.nickname}
              onChange={handleInputChange}
              placeholder="별명"
            ></input>
          </div>
          <div className="text-box">
            {errors.nickname && "별명을 입력해 주세요."}
          </div>
          <div>
            <input
              name="name"
              className="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="이름"
            ></input>
          </div>
          <div className="text-box">
            {errors.name && "이름을 입력해 주세요."}
          </div>
          <div>
            <input
              name="Phone"
              className="text"
              value={formData.Phone}
              onChange={handleInputChange}
              placeholder="전화번호"
            ></input>
          </div>
          <div className="text-box">
            {errors.Phone && "형식이 올바르지 않습니다. 예: 010-1234-5678"}
          </div>
          <div>
            <input
              name="Birth"
              type="date"
              className="text"
              value={formData.Birth}
              onChange={handleInputChange}
              onKeyDown={(event) => {
                event.preventDefault();
              }}
              placeholder="생년월일 (YYYY/MM/DD)"
              max={maxDate} //날짜 제한
            />
          </div>
          <div className="text-box">
            {errors.Birth && "생년월일을 입력해 주세요."}
          </div>
          <button type="submit" className="SignUp-button-SignUp">
            회원 가입
          </button>
        </form>
        <CredentialBar></CredentialBar>
      </div>
    </div>
  );
}

export default SignUp;
