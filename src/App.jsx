import dayjs from "dayjs";
import CourseViewer from "./components/courseViewer/CourseViewer";
import { Countdown } from "./components/Countdown";
import Footer from "./components/Footer";
import BadgeDate from "./components/BadgeDate";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import Layout from "./components/layout/Layout";
export default function App() {
  const now = dayjs().format("YYYY-MM-DD");
  return (
    <Layout>
      {/* TITULO Y SUBTITULO OVERLAY */}
      <Banner />
      {/* REPRODUCTOR DE VIDEO CON GLOW / RESPLANDOR */}
      {now >= "2026-10-05" && <CourseViewer />}

      {/* BADGE CON LA FECHA */}
      <BadgeDate />
      {/* RECTÁNGULOS DE CUENTA REGRESIVA CON GLASSMORPHISM */}
      <Countdown />
    </Layout>
  );
}
