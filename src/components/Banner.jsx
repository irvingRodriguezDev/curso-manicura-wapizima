import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box sx={{ textAlign: "center", position: "relative", my: 2 }}>
      <Typography
        variant='h1'
        sx={{
          fontWeight: 900,
          color: "rgba(229, 56, 136, 0.12)",
          fontSize: { xs: "3.5rem", sm: "6.5rem", md: "9.5rem" },
          lineHeight: 0.9,
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          textTransform: "uppercase",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "-2px",
        }}
      >
        EXCLUSIVO
      </Typography>

      <Typography
        variant='overline'
        sx={{
          position: "relative",
          mt: { xs: "-1.8rem", sm: "-3.5rem", md: "-5rem" },
          color: "#E53888",
          letterSpacing: { xs: "4px", md: "8px" },
          fontWeight: 800,
          textTransform: "uppercase",
          display: "block",
          fontSize: { xs: "14px", sm: "24px", md: "38px" },
          textShadow: "0 0 20px rgba(229, 56, 136, 0.6)",
        }}
      >
        CURSO DE MANICURA
      </Typography>
    </Box>
  );
};

export default Banner;
