import { createTheme } from "@mui/material/styles";

// Color palette based on existing styles
const colors = {
  primary: "#333333",
  secondary: "#FFEEDC",
  background: {
    default: "#FFEEDC",
    paper: "#F5DCC6",
    hover: "#f6e0cc",
  },
  border: {
    default: "#EFD2B8",
    hover: "#04030281",
  },
  text: {
    primary: "#333333",
    onDark: "#FFEEDC",
  },
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary,
      contrastText: colors.text.onDark,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.text.primary,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.5rem",
      textDecoration: "underline",
      fontWeight: 700,
      color: colors.text.primary,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: colors.text.primary,
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: "bold",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.text.primary,
          flex: 1,
          borderRadius: "0",
          "&:hover": {
            backgroundColor: colors.primary,
            color: colors.text.onDark,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "none",
          backdropFilter: "blur(5px)",
          borderBottom: `1px solid ${colors.primary}`,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          border: `2px solid ${colors.border.default}`,
          borderRadius: "2%",
          "&:hover": {
            borderColor: colors.border.hover,
            backgroundColor: colors.background.hover,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          marginTop: "10px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          "--top-nav-height": "56px",
          "@media (min-width: 481px)": {
            "--top-nav-height": "64px",
          },
        },
        "*": {
          "@media (min-width: 481px)": {
            fontSize: "20px",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 481,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default theme;
