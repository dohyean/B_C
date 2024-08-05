import React from "react";

const Toolbar = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="toolbar">
      <span className="ql-formats">
        <select className="ql-header" defaultValue="">
          <option value="1"></option>
          <option value="2"></option>
          <option value=""></option>
        </select>
        <select className="ql-font"></select>
        <select className="ql-size">
          <option value="8px">8px</option>
          <option value="10px">10px</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="18px">18px</option>
          <option value="24px">24px</option>
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
      </span>
      <span className="ql-formats">
        <select className="ql-color"></select>
        <select className="ql-background"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-script" value="sub"></button>
        <button className="ql-script" value="super"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-indent" value="-1"></button>
        <button className="ql-indent" value="+1"></button>
      </span>
      <span className="ql-formats">
        <select className="ql-align"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-direction" value="rtl"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-link"></button>
        <button className="ql-image"></button>
        <button className="ql-video"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-clean"></button>
      </span>
    </div>
  );
});

export default Toolbar;
