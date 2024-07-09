import { Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import HomePage from "./HomePage.js";
import SignUp from "./SignUp.js";
import FindINFO from "./FindINFO.js";
import HomePageLogin from "./HomePageLogIn.js";

// import TestModule from "./test_module (이후 삭제 예정)/TestModule.js"; // 테스트 목적의 데이터

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/FindINFO" element={<FindINFO />} />
      <Route path="/HomePageLogin" element={<HomePageLogin />} />

      {/* <Route path="/TestModule" element={<TestModule />} /> */}
    </Routes>
  );
}

export default Router;
