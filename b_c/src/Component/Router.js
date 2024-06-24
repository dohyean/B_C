import { Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import HomePage from "./HomePage.js";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
