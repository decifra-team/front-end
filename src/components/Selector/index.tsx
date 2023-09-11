import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useState } from "react";

interface SelectorProps {
  ask: string;
}

export const Selector = ({ ask }: SelectorProps) => {
  const [selected, setSelected] = useState("");
  return (
    <Box
      sx={{
        // height: 80,
        // backgroundColor: "#071560",
        paddingLeft: 3,
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        paddingRight: 4,
        gap: 3,
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          cursor: "pointer",
          fontSize: 20,
        }}
      >
        {ask}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Concordo
        </Typography>
        <ButtonGroup
          variant={"contained"}
          aria-label="outlined primary button group"
        >
          <Button
            variant={selected === "1" ? "contained" : "outlined"}
            onClick={() => setSelected("1")}
          >
            1
          </Button>
          <Button
            variant={selected === "2" ? "contained" : "outlined"}
            onClick={() => setSelected("2")}
          >
            2
          </Button>
          <Button
            variant={selected === "3" ? "contained" : "outlined"}
            onClick={() => setSelected("3")}
          >
            3
          </Button>
          <Button
            variant={selected === "4" ? "contained" : "outlined"}
            onClick={() => setSelected("4")}
          >
            4
          </Button>
          <Button
            variant={selected === "5" ? "contained" : "outlined"}
            onClick={() => setSelected("5")}
          >
            5
          </Button>
          <Button
            variant={selected === "6" ? "contained" : "outlined"}
            onClick={() => setSelected("6")}
          >
            6
          </Button>
          <Button
            variant={selected === "7" ? "contained" : "outlined"}
            onClick={() => setSelected("7")}
          >
            7
          </Button>
        </ButtonGroup>
        <Typography
          sx={{
            // color: "white",
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Discordo
        </Typography>
      </Box>
    </Box>
  );
};
