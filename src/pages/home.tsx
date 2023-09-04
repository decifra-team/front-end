import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
    </Box>
  );
};

export default HomePage;
