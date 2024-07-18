import Menubar from "./Menubar";
import { useNavigate } from "react-router-dom";
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

  const [formData, handleChange, setFormData] = useFormData({
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
      <Menubar></Menubar>
      <div className="App-content-ChangePW">
        <h2>비밀번호 변경</h2>
        <form onSubmit={handleFormSubmit} className="changePW-form">
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="PW"
              className="text password-input"
              value={formData.PW}
              onChange={handleInputChange}
              placeholder="새 비밀번호(8 ~ 32자) 및 특수문자 포함"
            ></input>
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
            ></input>
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
        <CredentialBar></CredentialBar>
      </div>
    </div>
  );
}

export default ChangePW;
