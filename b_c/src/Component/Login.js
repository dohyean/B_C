// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../Style/Login.css";
// import Menubar from "./Menubar";
// import { useFormData } from "../Function/useFormData";
// import { Log_in } from "../Function/Login/Log_in";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { usePasswordToggle } from "../Function/usePasswordToggle";
// import CredentialBar from "./CredentialBar";

// function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [formData, handleChange, setFormData] = useFormData({
//     ID: "",
//     PW: "",
//   });

//   const { showPassword, toggleShowPassword } = usePasswordToggle();

//   return (
//     <div className="App">
//       <Menubar></Menubar>
//       <div className="App-content">
//         <div>
//           <input
//             name="ID"
//             className="text"
//             value={formData.ID}
//             onChange={handleChange}
//             placeholder="아이디"
//           ></input>
//         </div>
//         &nbsp;
//         <div className="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="PW"
//             className="text password-input"
//             value={formData.PW}
//             onChange={handleChange}
//             placeholder="비밀번호"
//           ></input>
//           <span onClick={toggleShowPassword} className="password-icon">
//             {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
//           </span>
//         </div>
//         &nbsp;
//         <button
//           onClick={() => Log_in(formData, setFormData, navigate)}
//           className="login-button-login"
//         >
//           로그인
//         </button>
//         <div>
//           <CredentialBar></CredentialBar>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/Login.css";
import Menubar from "./Menubar";
import { useFormData } from "../Function/useFormData";
import { Log_in } from "../Function/Login/Log_in";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { usePasswordToggle } from "../Function/usePasswordToggle";
import CredentialBar from "./CredentialBar";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, handleChange, setFormData] = useFormData({
    ID: location.state?.selectedID || "", // 전달된 selectedID를 초기값으로 설정
    PW: "",
  });

  const { showPassword, toggleShowPassword } = usePasswordToggle();

  useEffect(() => {
    if (location.state?.selectedID) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ID: location.state.selectedID,
      }));
    }
  }, [location.state, setFormData]);

  return (
    <div className="App">
      <Menubar></Menubar>
      <div className="App-content">
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
            placeholder="비밀번호"
          ></input>
          <span onClick={toggleShowPassword} className="password-icon">
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
        &nbsp;
        <button
          onClick={() => Log_in(formData, setFormData, navigate)}
          className="login-button-login"
        >
          로그인
        </button>
        <div>
          <CredentialBar></CredentialBar>
        </div>
      </div>
    </div>
  );
}

export default Login;
