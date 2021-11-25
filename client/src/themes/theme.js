import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      fontFamily: "Montserrat",
      padding: "1.375",
    },
  },
  button: {
    padding: "1rem 0",
  },
  palette: {
    primary: { main: "#3A8DFF", focused: "#0061e6" },
    secondary: { main: "#B0B0B0" },
    gray: "rgb(176, 176, 176)",
  },
});
