import { Card, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

export const Countdown = () => {
  // Lógica de cuenta regresiva
  const targetDate = new Date("2026-10-05T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = +targetDate - +new Date();
      if (diff > 0) {
        setTimeLeft({
          días: Math.floor(diff / (1000 * 60 * 60 * 24)),
          horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((diff / 1000 / 60) % 60),
          segundos: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: "800px",
        mx: "auto",
        my: 4,
        justifyContent: "center",
      }}
    >
      {Object.entries(timeLeft).map(([label, val]) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={label}>
          <Card
            sx={{
              py: 2.5,
              px: 1,
              textAlign: "center",
              background: "rgba(26, 8, 18, 0.7)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(225, 33, 139, 0.3)",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "rgba(225, 33, 139, 0.7)",
              },
            }}
          >
            <Typography
              variant='h3'
              sx={{
                fontWeight: 800,
                color: "#ffffff",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {String(val).padStart(2, "0")}
            </Typography>
            <Typography
              variant='caption'
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#E53888",
                letterSpacing: 2,
                display: "block",
                mt: 0.5,
              }}
            >
              {label}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
