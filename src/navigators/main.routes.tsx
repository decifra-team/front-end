import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login.page";

const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/*" element={<LoginPage />} />
        </Routes>
    );
  };
  export default MainRoutes;