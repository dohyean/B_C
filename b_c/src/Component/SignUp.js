import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import Menubar from "./Menubar";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Sign_Up } from "../Function/SignUp_Sign_up";
import { usePasswordToggle } from "../Function/SignUp_PasswordToggle";
import { useFormData } from "../Function/useFormData";

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

  const {
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  } = usePasswordToggle();

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content-SignUp">
        <div>
          <input
            name="ID"
            className="text"
            value={formData.ID}
            onChange={handleChange}
            placeholder="아이디"
          ></input>
        </div>
        <div className="text-box">보이지 않는 글씨</div>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="PW"
            className="text password-input"
            value={formData.PW}
            onChange={handleChange}
            placeholder="비밀번호(8 ~ 32자) 및 특수문자 포함"
          ></input>
          <span onClick={toggleShowPassword} className="password-icon">
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
        <div className="text-box">보이지 않는 글씨</div>
        <div className="password-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPW"
            className="text"
            value={formData.confirmPW}
            onChange={handleChange}
            placeholder="비밀번호 재입력"
          ></input>
          <span onClick={toggleShowConfirmPassword} className="password-icon">
            {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
        <div className="text-box">보이지 않는 글씨</div>
        <div>
          <input
            name="nickname"
            className="text"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="별명"
          ></input>
        </div>
        <div className="text-box">보이지 않는 글씨</div>
        <div>
          <input
            name="name"
            className="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
          ></input>
        </div>
        <div className="text-box">보이지 않는 글씨</div>
        <div>
          <input
            name="Phone"
            className="text"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="전화번호"
          ></input>
        </div>
        <div className="text-box">보이지 않는 글씨</div>
        <div>
          <input
            name="Birth"
            type="date"
            className="text"
            value={formData.Birth}
            onChange={handleChange}
            onKeyDown={(event) => {
              event.preventDefault();
            }}
            placeholder="생년월일 (YYYY/MM/DD)"
          />
        </div>
        <div className="text-box">보이지 않는 글씨</div>
        <button
          onClick={() => Sign_Up(formData, setFormData, navigate)}
          className="SignUp-button-SignUp"
        >
          회원 가입
        </button>
      </div>
    </div>
  );
}

export default SignUp;
