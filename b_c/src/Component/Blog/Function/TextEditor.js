import React, { useRef } from "react";
import TextEditorToolbar from "./TextEditorToolbar";

function TextEditor() {
  const editorRef = useRef(null);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleBold = () => execCommand("bold");
  const handleItalic = () => execCommand("italic");
  const handleUnderline = () => execCommand("underline");
  const handleFontSizeChange = (size) => execCommand("fontSize", size);
  const handleColorChange = (color) => execCommand("foreColor", color);

  return (
    <div>
      <TextEditorToolbar
        onBold={handleBold}
        onItalic={handleItalic}
        onUnderline={handleUnderline}
        onFontSizeChange={handleFontSizeChange}
        onColorChange={handleColorChange}
      />
      <div
        ref={editorRef}
        contentEditable
        style={{
          minHeight: "200px",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default TextEditor;
