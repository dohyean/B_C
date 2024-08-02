import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { usePasswordToggle } from "./usePasswordToggle";
import "../../Style/SignUp.css";

function PasswordInputField({ name, value, onChange, error, placeholder }) {
  const { showPassword, toggleShowPassword } = usePasswordToggle();

  return (
    <div>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          className="text password-input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        ></input>
        <span onClick={toggleShowPassword} className="password-icon">
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
      </div>
      <div className="text-box">{error || " "}</div> {/* 항상 공간을 차지 */}
    </div>
  );
}

export default PasswordInputField;
