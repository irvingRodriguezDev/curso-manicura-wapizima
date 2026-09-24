import React from "react";
import PlayerVideo from "../player/PlayerVideo";
import { Box } from "@mui/material";

const CourseViewer = () => {
  return (
    <Box
      sx={{
        maxWidth: "960px",
        mx: "auto",
        my: 4,
        p: 0.5,
        borderRadius: "24px",
        background:
          "linear-gradient(135deg, rgba(225,33,139,0.8) 0%, rgba(212,175,55,0.4) 100%)",
        boxShadow: "0 0 35px rgba(225, 33, 139, 0.35)",
      }}
    >
      <Box
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          bgcolor: "#000",
        }}
      >
        <PlayerVideo />
      </Box>
    </Box>
  );
};

export default CourseViewer;
