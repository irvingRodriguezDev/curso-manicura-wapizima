import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const CoursePlaylist = () => {
  const lessons = [
    { name: "Introduccion", index: 1, descripcion: "Esta es la introduccion" },
    {
      name: "Manicura para principiantes",
      index: 2,
      descripcion: "Descubre como hacer la manicura perfecta",
    },
    {
      name: "Practica: Relizar manicura",
      index: 3,
      descripcion: "Se muestra practicamente como realizar la manicura ",
    },
  ];
  return (
    <Grid container spacing={2} sx={{ padding: "10px" }}>
      <Grid size={12}>
        <Paper elevation={3} sx={{ padding: "8px" }}>
          <Typography>Contenido de la clase</Typography>
        </Paper>
      </Grid>
      {lessons.map((l) => (
        <Grid size={12} key={l.index}>
          <Paper>
            <Typography
              variant='subtitle1'
              sx={{ textAlign: "start", marginLeft: 1.5 }}
            >
              {l.name}
            </Typography>
            <Typography
              variant='caption'
              sx={{ textAlign: "start", marginLeft: 1.7 }}
            >
              {l.descripcion}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CoursePlaylist;
