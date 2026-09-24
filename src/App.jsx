import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Chip,
} from "@mui/material";
import { Close, Send, CheckCircle } from "@mui/icons-material";
import { wapizimaTheme } from "./theme";
import confetti from "canvas-confetti";
import logoWapizima from "./assets/Logo_Wapizima.webp";
export default function App() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#e6007e", "#d4af37"],
    });
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setEmail("");
    }, 2500);
  };

  return (
    <ThemeProvider theme={wapizimaTheme}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid size={12} sx={{ mt: 6 }}>
          <img
            src={logoWapizima}
            alt='Logo Wapizima'
            style={{ maxWidth: "100%", height: "100px" }}
          />
        </Grid>
        <Grid size={12}>
          <Typography
            variant='h1'
            sx={{
              position: "relative",
              top: { xs: "30px", sm: "15px", md: "10px" }, // Ajusta la posición vertical
              left: "50%",
              transform: "translateX(-50%)", // Centra horizontalmente
              fontWeight: "bold",
              // Color rosa muy pálido y sutil, similar al ejemplo
              color: "rgba(229, 56, 136, 0.99)",
              fontSize: { xs: "3.2rem", sm: "6rem", md: "8rem", lg: "10rem" },
              lineHeight: 1,
              whiteSpace: "nowrap", // Evita que el texto se parta en varias líneas
              zIndex: 0, // Por detrás de todo el contenido
              pointerEvents: "none", // Para que no interfiera con clics en otros elementos
              textTransform: "uppercase",
              fontFamily: "emoji",
              letterSpacing: "-5px", // Letras más juntas para estilo moderno
            }}
          >
            EXCLUSIVO
          </Typography>

          <Typography
            variant='overline'
            sx={{
              color: "#E53888", // Usamos el color principal para que resalte
              letterSpacing: "4px", // Más espaciado para estilo moderno
              fontWeight: 900,
              textTransform: "uppercase",
              mb: 15.5,
              display: "block", // Asegura que el margen funcione
              fontSize: { xs: "12px", sm: "18px", md: "45px" },
              // Sutil sombra blanca para asegurar legibilidad sobre el texto de fondo
              textShadow: "0 2px 4px rgba(255,255,255,0.8)",
            }}
          >
            CURSO DE MANICURA
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              display: "inline-block",
              p: 1.5,
              px: 3,
              bgcolor: "#E1218B",
              borderRadius: 4,
              border: "4px solid #fff",
              mb: 4,
            }}
          >
            <Typography variant='h6' sx={{ color: "#fff", fontWeight: 700 }}>
              🗓️ DISPONIBLE PRÓXIMAMENTE • 05 DE OCTUBRE
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ mb: 4, display: "flex", justifyContent: "center" }}
          >
            <Grid size={8}>
              <Grid container spacing={2}>
                {Object.entries(timeLeft).map(([label, val]) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={label}>
                    <Card sx={{ py: 2, bgcolor: "white" }}>
                      <Typography
                        variant='h3'
                        sx={{ fontWeight: 800, color: "#E1218B" }}
                      >
                        {String(val).padStart(2, "0")}
                      </Typography>
                      <Typography
                        variant='caption'
                        sx={{
                          textTransform: "uppercase",
                          fontWeight: 700,
                          color: "#E1218B",
                        }}
                      >
                        {label}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Box
            component='footer'
            sx={{ textAlign: "center", py: 2, opacity: 0.5 }}
          >
            <Typography variant='caption' sx={{ color: "#E74790" }}>
              © 2026 Wapizima Academy. Todos los derechos reservados.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              bgcolor: "background.paper",
              borderRadius: 4,
              border: "1px solid #e6007e",
              p: 2,
            },
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8, color: "gray" }}
          >
            <Close />
          </IconButton>
          <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
            {!submitted ? "Lista VIP de Espera" : "¡Lugar Reservado!"}
          </DialogTitle>
          <DialogContent>
            {!submitted ? (
              <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  Recibe un descuento prioritario el 5 de octubre.
                </Typography>
                <TextField
                  fullWidth
                  type='email'
                  label='Correo Electrónico'
                  variant='outlined'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  color='primary'
                  endIcon={<Send />}
                >
                  Notificarme Primero
                </Button>
              </Box>
            ) : (
              <Box sx={{ textAlign: "center", py: 3 }}>
                <CheckCircle color='primary' sx={{ fontSize: 60, mb: 1 }} />
                <Typography variant='body2' color='text.secondary'>
                  Te enviaremos el enlace prioritario al abrir inscripciones.
                </Typography>
              </Box>
            )}
          </DialogContent>
        </Dialog> */}
    </ThemeProvider>
  );
}
