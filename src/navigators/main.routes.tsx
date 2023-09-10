import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login.page";
import Personalidade from "../pages/personalidade";
import Decisao from "../pages/decisao";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/personalidade" element={<Personalidade />} />
      <Route path="/decisao" element={<Decisao />} />
    </Routes>
  );
};
export default MainRoutes;
