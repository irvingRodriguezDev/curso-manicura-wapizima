import { Box, Typography } from "@mui/material";
import React from "react";

const BadgeDate = () => {
  return (
    <Box sx={{ textAlign: "center", my: 3 }}>
      <Box
        sx={{
          display: "inline-block",
          p: 1.5,
          px: 4,
          background: "linear-gradient(90deg, #E1218B 0%, #C41172 100%)",
          borderRadius: 50,
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 8px 25px rgba(225, 33, 139, 0.4)",
        }}
      >
        <Typography
          variant='h6'
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "0.9rem", sm: "1.2rem" },
            letterSpacing: 1,
          }}
        >
          🗓️ DISPONIBLE PRÓXIMAMENTE • 05 DE OCTUBRE
        </Typography>
      </Box>
    </Box>
  );
};

export default BadgeDate;
