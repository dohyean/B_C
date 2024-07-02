import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import Menubar from "./Menubar";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUp() {
  const navigate = useNavigate();

  const HandleClick = (url) => {
    navigate(url);
  };

  /*const [text, setText] = useState("");*/

  const [formData, setFormData] = useState({
    ID: "",
    PW: "",
    confirmPW: "",
    nickname: "",
    name: "",
    Phone: "",
    Birth: "",
  });

  /*const handleChange = (event) => {
    setFormData(event.target.value);
  };*/
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const Sign_Up = () => {
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,32}$/;

    for (let key in formData) {
      if (formData[key] === "") {
        var key_info = "";
        if (key === "ID") key_info = "아이디";
        else if (key === "PW") key_info = "비밀번호";
        else if (key === "confirmPW") key_info = "비밀번호 재입력";
        else if (key === "nickname") key_info = "별명";
        else if (key === "name") key_info = "이름";
        else if (key === "Phone") key_info = "전화번호";
        else if (key === "Birth") key_info = "생년월일";
        const strings = key_info + "를(을) 입력해주세요";
        alert(strings);
        return;
      }
    }

    if (!passwordRegex.test(formData.PW)) {
      alert(
        "비밀번호는 8~32자 이내의 영문자, 숫자 및 특수 문자를 포함해야 합니다."
      );
      return;
    }

    if (formData.PW !== formData.confirmPW) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert(JSON.stringify(formData));

    // 회원 가입 성공 시 초기화
    setFormData({
      ID: "",
      PW: "",
      confirmPW: "",
      nickname: "",
      name: "",
      Phone: "",
      Birth: "",
    });

    alert("회원가입 완료");

    navigate("/Login");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

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
        &nbsp;
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
        &nbsp;
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
        &nbsp;
        <div>
          <input
            name="nickname"
            className="text"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="별명"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            name="name"
            className="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            name="Phone"
            className="text"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="전화번호"
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            name="Birth"
            type="date"
            className="text"
            value={formData.Birth}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="생년월일 (YYYY/MM/DD)"
          />
        </div>
        &nbsp;
        <button onClick={Sign_Up} className="SignUp-button-SignUp">
          회원 가입
        </button>
      </div>
    </div>
  );
}

export default SignUp;
