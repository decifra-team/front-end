import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components/Header";

const Result: React.FC = () => {
  const { personality } = useParams();

  console.log(personality);

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
          {personality}
        </Typography>
      </Box>
    </Box>
  );
};

export default Result;
