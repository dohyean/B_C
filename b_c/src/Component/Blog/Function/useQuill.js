// import { useEffect } from "react";
// import Quill from "quill";

// const useQuill = (quillRef, toolbarRef) => {
//   useEffect(() => {
//     if (quillRef.current && toolbarRef.current) {
//       if (!quillRef.current.__quill) {
//         const quill = new Quill(quillRef.current, {
//           theme: "snow",
//           modules: {
//             toolbar: {
//               container: toolbarRef.current,
//             },
//           },
//           formats: [
//             "header",
//             "font",
//             "size",
//             "bold",
//             "italic",
//             "underline",
//             "strike",
//             "color",
//             "background",
//             "script",
//             "list",
//             "bullet",
//             "indent",
//             "align",
//             "direction",
//             "link",
//             "image",
//             "video",
//           ],
//         });

//         quillRef.current.__quill = true;

//         // 선택 변경 이벤트 리스너 추가
//         quill.on("selection-change", (range, oldRange, source) => {
//           if (range) {
//             const format = quill.getFormat(range);
//             const sizeSelect = toolbarRef.current.querySelector(".ql-size");
//             if (sizeSelect) {
//               sizeSelect.value = format.size || "";
//             }
//           }
//         });

//         // 툴바 글씨 크기 선택 이벤트 리스너 추가
//         const sizeSelect = toolbarRef.current.querySelector(".ql-size");
//         if (sizeSelect) {
//           sizeSelect.addEventListener("change", (e) => {
//             const size = e.target.value;
//             quill.format("size", size);
//           });
//         }
//       }
//     }
//   }, [quillRef, toolbarRef]);
// };

// export default useQuill;

import { useEffect } from "react";
import Quill from "quill";

const useQuill = (quillRef, toolbarRef) => {
  useEffect(() => {
    if (quillRef.current && toolbarRef.current) {
      if (!quillRef.current.__quill) {
        const quill = new Quill(quillRef.current, {
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

        // 선택 변경 이벤트 리스너 추가
        quill.on("selection-change", (range, oldRange, source) => {
          if (range) {
            const format = quill.getFormat(range);
            const sizeSelect = toolbarRef.current.querySelector(".ql-size");
            if (sizeSelect) {
              sizeSelect.value = format.size || "";
            }
          }
        });

        // 툴바 글씨 크기 선택 이벤트 리스너 추가
        const sizeSelect = toolbarRef.current.querySelector(".ql-size");
        if (sizeSelect) {
          sizeSelect.addEventListener("change", (e) => {
            const size = e.target.value;
            quill.format("size", size);
          });
        }
      }
    }
  }, [quillRef, toolbarRef]);
};

export default useQuill;
