import React from "react";
import PlayerVideo from "../player/PlayerVideo";
import { Box, Grid } from "@mui/material";

const CourseViewer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        my: 4,
        p: 0.5,
        borderRadius: "24px",
        background:
          "linear-gradient(135deg, rgba(225,33,139,0.8) 0%, rgba(212,175,55,0.4) 100%)",
        boxShadow: "0 0 35px rgba(225, 33, 139, 0.35)",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={9}>
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: "#000",
            }}
          >
            <PlayerVideo />
          </Box>
        </Grid>
        {/* <Grid size={3}>Aqui iran las lecciones</Grid> */}
      </Grid>
    </Box>
  );
};

export default CourseViewer;
