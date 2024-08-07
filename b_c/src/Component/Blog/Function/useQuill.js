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

// import { useEffect } from "react";
// import Quill from "quill";
// import ImageResize from "quill-image-resize-module";

// Quill.register("modules/imageResize", ImageResize);

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
//             imageResize: {
//               // Options for image resize
//               displaySize: true, // Show size controls
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

// import { useEffect } from "react";
// import Quill from "quill";
// import ImageResize from "quill-image-resize-module"; // 모듈 임포트

// // Quill에 모듈 등록
// Quill.register("modules/imageResize", ImageResize);

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
//             imageResize: {
//               displaySize: true, // 이미지 크기 조절 UI 표시
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

// import { useEffect } from "react";
// import Quill from "quill";
// // import ImageResize from "quill-image-resize-module";

// // Quill.register("modules/imageResize", ImageResize);

// const useQuill = (quillRef, toolbarRef) => {
//   useEffect(() => {
//     if (quillRef.current && toolbarRef.current) {
//       if (!quillRef.current.__quill) {
//         const quill = new Quill(quillRef.current, {
//           theme: "snow",
//           modules: {
//             toolbar: {
//               container: toolbarRef.current,
//               handlers: {
//                 image: () => {
//                   // 이미지 업로드 핸들러를 구현
//                   const input = document.createElement("input");
//                   input.setAttribute("type", "file");
//                   input.setAttribute("accept", "image/*");
//                   input.click();
//                   input.onchange = () => {
//                     const file = input.files[0];
//                     if (file) {
//                       const reader = new FileReader();
//                       reader.onload = () => {
//                         const range = quill.getSelection();
//                         quill.insertEmbed(range.index, "image", reader.result);
//                       };
//                       reader.readAsDataURL(file);
//                     }
//                   };
//                 },
//               },
//             },
//             image: {
//               // 이미지 모듈의 옵션을 설정할 수 있습니다.
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
import ImageResize from "quill-image-resize-module"; // 모듈을 임포트합니다

// Quill에 모듈 등록
Quill.register("modules/imageResize", ImageResize);

const useQuill = (quillRef, toolbarRef) => {
  useEffect(() => {
    if (quillRef.current && toolbarRef.current) {
      if (!quillRef.current.__quill) {
        const quill = new Quill(quillRef.current, {
          theme: "snow",
          modules: {
            toolbar: {
              container: toolbarRef.current,
              handlers: {
                image: () => {
                  // 이미지 업로드 핸들러를 구현
                  const input = document.createElement("input");
                  input.setAttribute("type", "file");
                  input.setAttribute("accept", "image/*");
                  input.click();
                  input.onchange = () => {
                    const file = input.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        const range = quill.getSelection();
                        quill.insertEmbed(range.index, "image", reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  };
                },
              },
            },
            imageResize: {
              // 이미지 리사이즈 모듈의 옵션을 설정할 수 있습니다.
              // 예를 들어, displaySize: true 등의 옵션을 설정할 수 있습니다.
              displaySize: true,
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
