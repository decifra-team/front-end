import { Box, Typography } from "@mui/material";
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <Box
      sx={{
        height: 80,
        backgroundColor: "#071560",
        paddingLeft: 3,
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        paddingRight: 4,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          gap: 3,
        }}
      >
        <img src={logo} alt="Logo" style={{ width: 80, height: 80 }} />
        <Typography
          sx={{
            color: "white",
            cursor: "pointer",
            fontSize: 30,
          }}
        >
          ?
        </Typography>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="25"
        viewBox="0 0 55 34"
        fill="none"
      >
        <path
          d="M2 17.5H53"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M2 32H53"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M2 2H53"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </Box>
  );
};
