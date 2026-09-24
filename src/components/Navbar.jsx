import { Box } from "@mui/material";
import LogoWapizima from "../assets/Logo_Wapizima.webp";
const Navbar = () => {
  return (
    <Box sx={{ textCenter: "center", textAlign: "center", pt: 4, mb: 1 }}>
      <img
        src={LogoWapizima}
        alt='Logo Wapizima'
        style={{
          maxWidth: "100%",
          height: "90px",
          objectFit: "contain",
          filter: "drop-shadow(0px 0px 12px rgba(225, 33, 139, 0.4))",
        }}
      />
    </Box>
  );
};

export default Navbar;
