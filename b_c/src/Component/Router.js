import { Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import HomePage from "./HomePage.js";
import SignUp from "./SignUp.js";
import HomePageLogin from "./HomePageLogin.js";
// import Blog from "./Blog.js";
import Community from "./Community.js";
import FindID from "./FindID.js";
import FindPW from "./FindPW.js";
import ChangePW from "./ChangePW.js";
import SelectID from "./SelectID.js";
import ChangeUserInfo from "./ChangeUserInfo.js";
import Blog from "./Blog/Blog.js";
import CreateBlog from "./Blog/CreateBlog.js";

import TestModule from "./test_module (이후 삭제 예정)/TestModule.js"; // 테스트 목적의 데이터

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/FindID" element={<FindID />} />
      <Route path="/FindPW" element={<FindPW />} />
      <Route path="/SelectID" element={<SelectID />} />
      <Route path="/ChangePW" element={<ChangePW />} />
      <Route path="/HomePageLogin" element={<HomePageLogin />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/CreateBlog" element={<CreateBlog />} />
      <Route path="/Community" element={<Community />} />
      <Route path="/ChangeUserInfo" element={<ChangeUserInfo />} />
      <Route path="/TestModule" element={<TestModule />} />
    </Routes>
  );
}

export default Router;
