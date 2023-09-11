import { Box, Button, ButtonGroup, Typography } from "@mui/material";

interface SelectorProps {
  ask: string;
}

export const Selector = ({ ask }: SelectorProps) => {
  return (
    <Box
      sx={{
        // height: 80,
        // backgroundColor: "#071560",
        paddingLeft: 3,
        alignItems: "center",
        justifyContent: "space-between",
        // display: "flex",
        paddingRight: 4,
      }}
    >
      <Typography
        sx={{
          // color: "white",
          cursor: "pointer",
          fontSize: 20,
        }}
      >
        {ask}
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
    </Box>
  );
};
