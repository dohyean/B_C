import { Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import HomePage from "./HomePage.js";
import SignUp from "./SignUp.js";
import FindINFO from "./FindINFO.js";
import HomePageLogin from "./HomePageLogIn.js";
import Blog from "./Blog.js";
import Community from "./Community.js";
import FindID from "./FindID.js";
import FindPW from "./FindPW.js";
import ChangePW from "./ChangePW.js";

import TestModule from "./test_module (이후 삭제 예정)/TestModule.js"; // 테스트 목적의 데이터

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/FindINFO" element={<FindINFO />} />
      <Route path="/FindID" element={<FindID />} />
      <Route path="/FindPW" element={<FindPW />} />
      <Route path="/ChangePW" element={<ChangePW />} />
      <Route path="/HomePageLogin" element={<HomePageLogin />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Community" element={<Community />} />
      <Route path="/TestModule" element={<TestModule />} />
    </Routes>
  );
}

export default Router;
