import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import ConstructionIcon from "@mui/icons-material/Construction";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { saveAs } from "file-saver";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { title: "Inicio", path: "/#home", icon: <HomeIcon /> },
    { title: "Proyectos", path: "/proyectos", icon: <WorkIcon /> },
    {
      title: "Herramientas",
      path: "/#herramientas",
      icon: <ConstructionIcon />,
    },
    {
      title: "Contactos",
      path: "/#contactos",
      icon: <PermContactCalendarIcon />,
    },
  ];

  const handleDownloadPdf = () => {
    // Aquí puedes realizar lógica para generar el PDF o proporcionar la URL del PDF
    const pdfUrl = "URL_DEL_PDF_O_GENERADOR_DEL_PDF";

    // Descargar el PDF usando file-saver
    saveAs(pdfUrl, "Curriculum Matias Marcelo Dei Castelli.pdf");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ marginBottom: "30px" }}>
        <Toolbar
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography>Matias Marcelo Dei Castelli</Typography>
        </Toolbar>
        <Toolbar
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "space-between",
          }}
          component={"div"}
          className="posNav"
        >
          <Typography sx={{ padding: "5px" }}>
            Matias Marcelo Dei Castelli
          </Typography>
          <Box sx={{ display: "flex" }}>
            {navLinks.map((navLink) => (
              <Button
                color="inherit"
                key={navLink.title}
                startIcon={navLink.icon}
                component={navLink.title == "Proyectos" ? NavLink : HashLink}
                to={navLink.path}
                sx={{
                  marginLeft: 1,
                  "&:hover": {
                    transition: "transform 2.2s",
                    color: "white",
                    bgcolor: "rgb(1, 23, 45)",
                    borderRadius: "50px",
                    transform: "rotateY(360deg)",
                  },
                }}
              >
                {navLink.title}
              </Button>
            ))}
            <Button
              color="inherit"
              key={"Curriculum"}
              startIcon={<PictureAsPdfIcon />}
              sx={{
                marginLeft: 1,
                "&:hover": {
                  transition: "transform 2.2s",
                  color: "white",
                  bgcolor: "rgb(1, 23, 45)",
                  borderRadius: "50px",
                  transform: "rotateY(360deg)",
                },
              }}
              onClick={handleDownloadPdf}
            >
              {"Curriculum"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: "flex", sm: "none" },
        }}
      >
        <NavListDrawer navLin={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default Navbar;
