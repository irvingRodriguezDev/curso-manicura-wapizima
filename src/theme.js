import { createTheme } from "@mui/material/styles";

export const wapizimaTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#FFE1F0",
      paper: "rgba(26, 8, 18, 0.75)",
    },
    primary: {
      main: "#e6007e", // Rosa Wapizima
      light: "#f64ca1",
      dark: "#cc0066",
    },
    secondary: {
      main: "#d4af37", // Oro
      light: "#fef08a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#fce7f3",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
          fontWeight: 700,
          padding: "12px 32px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(230, 0, 126, 0.25)",
          borderRadius: 16,
        },
      },
    },
  },
});
