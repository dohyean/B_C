import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SignUp.css";
import Menubar from "./Menubar";

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

  const Sign_Up = () => {
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,32}$/;

    if (!passwordRegex.test(formData.PW)) {
      alert(
        "비밀번호는 8~32자 이내의 영문자, 숫자 및 특수 문자를 포함해야 합니다."
      );
      return;
    }

    if (formData.PW.length < 8 || formData.PW.length > 32) {
      alert("비밀번호를 8~32자로 작성해주세요.");
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
        <div>
          <input
            type={showPassword ? "text" : "password"}
            name="PW"
            className="text password-input"
            value={formData.PW}
            onChange={handleChange}
            placeholder="비밀번호(8 ~ 32자)"
          ></input>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={toggleShowPassword}
          ></input>
        </div>
        &nbsp;
        <div>
          <input
            type="password"
            name="confirmPW"
            className="text"
            value={formData.confirmPW}
            onChange={handleChange}
            placeholder="비밀번호 재입력"
          ></input>
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
