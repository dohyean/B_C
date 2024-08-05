import React from "react";
import { useState } from "react";

function TextEditorToolbar({
  onBold,
  onItalic,
  onUnderline,
  onFontSizeChange,
  onColorChange,
}) {
  // Font size options array
  const fontSizeOptions = Array.from({ length: 65 }, (_, i) => i + 8);

  // Handler for font size change
  const handleFontSizeChange = (e) => {
    const value = e.target.value;
    onFontSizeChange(value);
  };

  return (
    <div className="text-editor-toolbar">
      <button onClick={onBold} title="Bold">
        B
      </button>
      <button onClick={onItalic} title="Italic">
        I
      </button>
      <button onClick={onUnderline} title="Underline">
        U
      </button>
      <select onChange={handleFontSizeChange} defaultValue="16">
        {fontSizeOptions.map((size) => (
          <option key={size} value={size}>
            {size}px
          </option>
        ))}
      </select>
      <input
        type="color"
        onChange={(e) => onColorChange(e.target.value)}
        title="Choose text color"
      />
    </div>
  );
}

export default TextEditorToolbar;
