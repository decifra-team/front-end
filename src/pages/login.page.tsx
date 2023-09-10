import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
      flex={1}
      display="flex"
      px={10}
      pt={8}
    >
      <Grid item xl={7} lg={7} md={7} sm={7} xs={6}>
        <Box display="flex" alignItems="right" justifyContent="right">
          <img src={logo} alt="Logo" style={{ width: 600, height: 600 }} />
        </Box>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={5} xs={6}>
        <Box
          alignItems="center"
          justifyContent="center"
          width="80%"
          marginTop={10}
        >
          <form>
            <Typography
              fontSize={40}
              fontWeight="bold"
              color="#071560"
              align="center"
              marginBottom={5}
            >
              Login
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid item xl={8} xs={8}>
                <Typography fontSize={30} color="#071560" align="left">
                  Seu ID
                </Typography>
                <TextField fullWidth />
              </Grid>
              <Grid item xl={8} xs={8}>
                <Typography fontSize={30} color="#071560" align="left">
                  Senha
                </Typography>
                <TextField fullWidth />
              </Grid>
              <Grid item xl={8} xs={8} mt={4}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => {
                      navigate("/personalidade");
                    }}
                  >
                    Entrar
                  </Button>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                >
                  <Button
                    variant="text"
                    type="button"
                    onClick={() => {
                      navigate("/forgotpassword");
                    }}
                  >
                    Esqueceu sua senha?
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
