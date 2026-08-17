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
          padding: "16px",
          gap: "12px",
          borderRadius: "12px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          border: "none",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(8px)",
          padding: "14px 20px",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow:
            "0 2px 6px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            transform: "translateY(-2px) scale(1.01)",
            boxShadow:
              "0 8px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.08)",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "14px 20px",
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
        primary: {
          fontWeight: 500,
          fontSize: "1rem",
          color: colors.text.primary,
          letterSpacing: "0.01em",
        },
        secondary: {
          color: colors.text.primary,
          opacity: 0.65,
          fontSize: "0.9rem",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colors.primary,
          minWidth: "36px",
          opacity: 0.8,
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: colors.text.primary,
          fontSize: "1.15rem",
          fontWeight: 700,
          padding: "12px 20px 12px 20px",
          lineHeight: "1.4",
          borderBottom: "none",
          borderLeft: `4px solid ${colors.primary}`,
          marginBottom: "12px",
          position: "sticky",
          top: "var(--top-nav-height)",
          zIndex: 1,
          letterSpacing: "0.02em",
          backdropFilter: "blur(12px)",
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
