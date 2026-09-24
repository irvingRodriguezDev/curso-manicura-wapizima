import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b0307",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        pb: 6,
      }}
    >
      {/* Luces de fondo ambientales para el toque de profundidad */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "300px", md: "700px" },
          height: { xs: "300px", md: "700px" },
          background:
            "radial-gradient(circle, rgba(225,33,139,0.25) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth='lg' sx={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
