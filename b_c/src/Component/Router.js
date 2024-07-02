import { Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import HomePage from "./HomePage.js";
import SignUp from "./SignUp.js";
import FindINFO from "./FindINFO.js";
import HomePageLogin from "./HomePageLogIn.js";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/FindINFO" element={<FindINFO />} />
      <Route path="/HomePageLogin" element={<HomePageLogin />} />
    </Routes>
  );
}

export default Router;
