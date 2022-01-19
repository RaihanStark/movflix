export const themeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#CE020D",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#9a9a9a",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
    background: {
      default: "#131313",
      paper: "#393939",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        border: 0,
        borderRadius: 3,
        color: "white",
        height: 38,
        padding: "0 20px",
      },
    },
    Mui: {
      disabled: {
        backgroundColor: "#ce020dba",
      },
    },
  },
};
