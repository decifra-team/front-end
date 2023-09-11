import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components/Header";

const Result: React.FC = (personality: any) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 8,
          paddingTop: 10,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          Sua personalidade é:
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: 40,
          }}
        >
          Lógico
        </Typography>
      </Box>
    </Box>
  );
};

export default Result;
