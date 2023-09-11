import React from "react";
import { Route, Routes } from "react-router-dom";

import Asks from "../pages/asks";
import Decisao from "../pages/decisao";
import LoginPage from "../pages/login.page";
import Personalidade from "../pages/personalidade";
import Result from "../pages/result";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/personalidade" element={<Personalidade />} />
      <Route path="/decisao" element={<Decisao />} />
      <Route path="/asks" element={<Asks />} />
      <Route path="/result/:personality" element={<Result />} />
    </Routes>
  );
};
export default MainRoutes;
