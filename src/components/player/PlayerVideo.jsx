import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import VideoJSPlayer from "./VideoJSPlayer";
import poster from "../../assets/poster.jpeg";
const PlayerVideo = () => {
  const title = "Manicura de cero a experto";
  const url_video = import.meta.env.VITE_VIDEO_URL;
  const [isPlaying, setIsPlaying] = useState(false);
  const playerInstanceRef = useRef(null);

  // Handler cuando la instancia de Video.js está lista
  const handlePlayerReady = (player) => {
    playerInstanceRef.current = player;
  };

  // Evento Play
  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Evento Pause (Sincroniza progreso inmediatamente)
  const handlePause = () => {
    setIsPlaying(false);
    const rawVideo = playerInstanceRef.current?.tech({
      IWillNotUseThisInPlugins: true,
    })?.el_;
    if (rawVideo) {
      syncCurrentProgress(rawVideo, false);
    }
  };

  // Evento Ended (Marca el video como completado)
  const handleEnded = () => {
    setIsPlaying(false);
    const rawVideo = playerInstanceRef.current?.tech({
      IWillNotUseThisInPlugins: true,
    })?.el_;
    if (rawVideo) {
      syncCurrentProgress(rawVideo, true);
    }
  };

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto", mt: 0 }}>
      <Box
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "#000",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          minHeight: { xs: 220, sm: 380, md: "auto" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {url_video ? (
          <VideoJSPlayer
            src={url_video}
            poster={poster}
            onReady={handlePlayerReady}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              color: "#fff",
            }}
          >
            <CircularProgress size={40} sx={{ color: "#D62D78" }} />
            <Typography variant='body2' sx={{ color: "rgba(255,255,255,0.7)" }}>
              Cargando lección...
            </Typography>
          </Box>
        )}
      </Box>

      {/* Información del Video y Progreso del Curso */}
      {/* <Box sx={{ mt: 0, p: 2.5, borderRadius: 3, backgroundColor: "#0B0307" }}>
        <Typography fontWeight={700} variant='h6' sx={{ mb: 1, color: "#fff" }}>
          {title}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default PlayerVideo;
