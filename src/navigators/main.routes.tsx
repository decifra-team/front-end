import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login.page";
import HomePage from "../pages/home";
import Asks from "../pages/asks";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/asks" element={<Asks />} />
    </Routes>
  );
};
export default MainRoutes;
