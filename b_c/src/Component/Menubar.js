// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../Style/Menubar.css";

// function Menubar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const HandleClick = (url) => {
//     if (location.pathname === url) {
//       //새로고침 기능
//       window.location.reload();
//     } else {
//       navigate(url);
//     }
//   };

//   var start_page = ["/Login"];
//   var HomePageLogin = ["/HomePageLogin"]; //로그인된 화면
//   var Blog = ["/Blog"]; //블로그
//   var Community = ["/Community"]; //커뮤니티

//   function page_check() {
//     for (var i = 0; i < start_page.length; i++) {
//       if (location.pathname === start_page[i]) {
//         return 1;
//       }
//       if (
//         //이제 로그인이 되어있는 경우에 이동할 수 있는 경로
//         location.pathname === HomePageLogin[i] ||
//         location.pathname === Blog[i] ||
//         location.pathname === Community[i]
//       ) {
//         return 2;
//       }
//     }
//   }

//   if (page_check() === 1) {
//     return (
//       <div>
//         <header className="App-header">
//           <h1 onClick={() => HandleClick("/")} style={{ cursor: "pointer" }}>
//             ABCD
//           </h1>
//           <button
//             onClick={() => HandleClick("/")}
//             className="back-button-HomePage"
//           >
//             뒤로 가기
//           </button>
//         </header>
//       </div>
//     );
//   } else if (page_check() === 2) {
//     return (
//       <div>
//         <header className="App-header">
//           <h1
//             onClick={() => HandleClick("/HomePageLogin")}
//             style={{ cursor: "pointer" }}
//           >
//             ABCD
//           </h1>
//           <div className="menu-container">
//             <div className="menu-items">
//               <h1 style={{ cursor: "pointer" }}>
//                 블로그
//                 <div className="dropdown-content">
//                   <a onClick={() => HandleClick("/Blog/1")}>블로그 항목 1</a>
//                   <a onClick={() => HandleClick("/Blog/2")}>블로그 항목 2</a>
//                   <a onClick={() => HandleClick("/Blog/3")}>블로그 항목 3</a>
//                 </div>
//               </h1>
//               <h1 style={{ cursor: "pointer" }}>
//                 커뮤니티
//                 <div className="dropdown-content">
//                   <a onClick={() => HandleClick("/Community/1")}>
//                     커뮤니티 항목 1
//                   </a>
//                   <a onClick={() => HandleClick("/Community/2")}>
//                     커뮤니티 항목 2
//                   </a>
//                   <a onClick={() => HandleClick("/Community/3")}>
//                     커뮤니티 항목 3
//                   </a>
//                 </div>
//               </h1>
//               {/* <h1
//                 onClick={() => HandleClick("/Blog")}
//                 style={{ cursor: "pointer" }}
//               >
//                 블로그
//               </h1>
//               <h1
//                 onClick={() => HandleClick("/Community")}
//                 style={{ cursor: "pointer" }}
//               >
//                 커뮤니티
//               </h1> */}
//               <h1>이름</h1>
//             </div>
//             <button
//               onClick={() => HandleClick("/")}
//               className="back-button-HomePage logout-button"
//             >
//               로그아웃
//             </button>
//           </div>
//         </header>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <header className="App-header">
//           <h1 onClick={() => HandleClick("/")} style={{ cursor: "pointer" }}>
//             ABCD
//           </h1>
//           <button onClick={() => HandleClick("/TestModule")}>
//             모듈 테스트
//           </button>
//           <button
//             onClick={() => HandleClick("/Login")}
//             className="login-button-Home"
//           >
//             로그인
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// export default Menubar;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Style/Menubar.css";

function Menubar() {
  const navigate = useNavigate();
  const location = useLocation();

  const HandleClick = (url) => {
    if (location.pathname === url) {
      // 새로고침 기능
      window.location.reload();
    } else {
      navigate(url);
    }
  };

  var start_page = ["/Login"];
  var HomePageLogin = ["/HomePageLogin"]; // 로그인된 화면
  var Blog = ["/Blog"]; // 블로그
  var Community = ["/Community"]; // 커뮤니티

  function page_check() {
    for (var i = 0; i < start_page.length; i++) {
      if (location.pathname === start_page[i]) {
        return 1;
      }
      if (
        location.pathname === HomePageLogin[i] ||
        location.pathname === Blog[i] ||
        location.pathname === Community[i]
      ) {
        return 2;
      }
    }
  }

  if (page_check() === 1) {
    return (
      <div>
        <header className="App-header">
          <h1 onClick={() => HandleClick("/")} style={{ cursor: "pointer" }}>
            ABCD
          </h1>
          <button
            onClick={() => HandleClick("/")}
            className="back-button-HomePage"
          >
            뒤로 가기
          </button>
        </header>
      </div>
    );
  } else if (page_check() === 2) {
    return (
      <div>
        <header className="App-header">
          <h1
            onClick={() => HandleClick("/HomePageLogin")}
            style={{ cursor: "pointer" }}
          >
            ABCD
          </h1>
          <div className="menu-container">
            <div className="menu-items">
              <div className="dropdown">
                <h1 style={{ cursor: "pointer" }}>
                  블로그
                  <div className="dropdown-content">
                    <button onClick={() => HandleClick("/Blog")}>블로그</button>
                    <button onClick={() => HandleClick("/Blog/2")}>
                      블로그 작성
                    </button>
                    <button onClick={() => HandleClick("/Blog/3")}>
                      블로그
                    </button>
                  </div>
                </h1>
              </div>
              <div className="dropdown">
                <h1 style={{ cursor: "pointer" }}>
                  커뮤니티
                  <div className="dropdown-content">
                    <h4
                      onClick={() => HandleClick("/Community")}
                      style={{ cursor: "pointer" }}
                    >
                      커뮤니티
                    </h4>
                    <button onClick={() => HandleClick("/Community/2")}>
                      커뮤니티 작성
                    </button>
                    <button onClick={() => HandleClick("/Community/3")}>
                      커뮤니티
                    </button>
                  </div>
                </h1>
              </div>
              <h1>이름</h1>
            </div>
            <button
              onClick={() => HandleClick("/")}
              className="back-button-HomePage logout-button"
            >
              로그아웃
            </button>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <header className="App-header">
          <h1 onClick={() => HandleClick("/")} style={{ cursor: "pointer" }}>
            ABCD
          </h1>
          <button onClick={() => HandleClick("/TestModule")}>
            모듈 테스트
          </button>
          <button
            onClick={() => HandleClick("/Login")}
            className="login-button-Home"
          >
            로그인
          </button>
        </header>
      </div>
    );
  }
}

export default Menubar;
