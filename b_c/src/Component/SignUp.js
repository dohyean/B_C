import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import Menubar from "./Menubar";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Sign_Up } from "../Function/SignUp/Sign_up";
import { usePasswordToggle } from "../Function/usePasswordToggle";
import { useFormData } from "../Function/useFormData";
import { handleChangeWithErrorCheck } from "../Function/SignUp/handleChangeWithErrorCheck";
import { useFormErrors_SignUP } from "../Function/SignUp/useFormErrors_SignUP";
import { handleSubmit_Sign_Up } from "../Function/SignUp/handleSubmit_Sign_Up";

function SignUp() {
  const navigate = useNavigate();

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

  const {
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  } = usePasswordToggle();

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
    <div className="App">
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
            {errors.ID && "아이디를 입력해 주세요(영문)."}
          </div>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="PW"
              className="text password-input"
              value={formData.PW}
              onChange={handleInputChange}
              placeholder="비밀번호(8 ~ 32자) 및 특수문자 포함"
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
            />
          </div>
          <div className="text-box">
            {errors.Birth && "생년월일을 입력해 주세요."}
          </div>
          <button type="submit" className="SignUp-button-SignUp">
            회원 가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
