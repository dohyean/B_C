import { useEffect } from "react";
import Quill from "quill";

const useQuill = (quillRef, toolbarRef) => {
  useEffect(() => {
    if (quillRef.current && toolbarRef.current) {
      if (!quillRef.current.__quill) {
        new Quill(quillRef.current, {
          theme: "snow",
          modules: {
            toolbar: {
              container: toolbarRef.current,
            },
          },
          formats: [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "color",
            "background",
            "script",
            "list",
            "bullet",
            "indent",
            "align",
            "direction",
            "link",
            "image",
            "video",
          ],
        });
        quillRef.current.__quill = true;
      }
    }
  }, [quillRef, toolbarRef]);
};

export default useQuill;
