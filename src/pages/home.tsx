import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import relogio from "../images/relogio.png";
import livro from "../images/livro.png";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize={32}
          fontWeight="bold"
          color="#071560"
          align="center"
          marginBottom={15}
          marginTop={10}
        >
          Teste de personalidade
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#5180A326",
              alignItems: "center",
              width: "fit-content",
              padding: 5,
              borderRadius: 3,
              display: "flex",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <img src={relogio} alt="Logo" style={{ width: 161, height: 110 }} />
            <Typography
              fontSize={20}
              fontWeight="bold"
              color="#071560"
              align="center"
            >
              Duração
            </Typography>
            <Typography fontSize={16} color="#071560" align="center">
              15 minutos
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#5180A326",
              alignItems: "center",
              width: "fit-content",
              padding: 5,
              borderRadius: 3,
              display: "flex",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <img src={livro} alt="Logo" style={{ width: 161, height: 110 }} />
            <Typography
              fontSize={20}
              fontWeight="bold"
              color="#071560"
              align="center"
            >
              Instruções
            </Typography>
            <Typography fontSize={16} color="#071560" align="center">
              Seja honesto<br></br>Tente não responder “neutro”
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            sx={{
              marginTop: 10,
              width: "fit-content",
              flex: 1,
              display: "flex",
            }}
            variant="contained"
          >
            Iniciar teste
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
