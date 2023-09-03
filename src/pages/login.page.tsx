import React, { useEffect, useState } from "react";
import { Stack, Box, Button, Typography, Grid, TextField } from "@mui/material";
//!TROCAR A LOGO (PRECISA DE TEXTO)
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Grid container
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
                    <Box alignItems="center" justifyContent="center" width="80%">
                        <form>
                            <Typography fontSize={30} color="#071560" align="center">
                                Login
                            </Typography>
                            <Grid container
                                alignItems="center"
                                justifyContent="center"
                                spacing={2}>
                                <Grid item xl={8} xs={8}>
                                    <Typography fontSize={30} color="#071560" align="left">
                                        Seu ID
                                    </Typography>
                                    <TextField
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xl={8} xs={8}>
                                    <Typography fontSize={30} color="#071560" align="left">
                                        Senha
                                    </Typography>
                                    <TextField
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xl={8} xs={8} mt={4}>
                                    <Box display="flex"
                                        justifyContent="center"
                                        alignItems="center">
                                        <Button
                                            variant="contained"
                                            type="button"
                                            onClick={() => { navigate("/home"); }}
                                        >
                                            Entrar
                                        </Button>
                                    </Box>
                                    <Box display="flex"
                                        justifyContent="center"
                                        alignItems="center" mt={2}>
                                        <Button
                                            variant="text"
                                            type="button"
                                            onClick={() => { navigate("/forgotpassword"); }}
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
        </>
    )
}

export default LoginPage;