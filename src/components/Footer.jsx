import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box component='footer' sx={{ textAlign: "center", py: 3, opacity: 0.6 }}>
      <Typography variant='caption' sx={{ color: "#E74790" }}>
        © 2026 Wapizima Academy. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
