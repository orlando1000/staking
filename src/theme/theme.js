import { createTheme } from "@mui/material";

const yellow = "#FFE599";
const orange = "#F28F21";

export const theme = createTheme({
  palette: {
    divider: "white",
    common: {
      yellow,
      orange,
    },
    background: {
      paper: "#5D2A1D",
      default: "#5D2A1D",
    },
    primary: {
      main: "rgb(54 25 18)",
    },
    secondary: {
      main: "#5D2A1D",
    },
  },
  typography: {
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "12px",
    },
    subtitle1: {
      fontSize: "14px",
    },
    h5: {
      fontSize: "28px",
    },
  },
});
