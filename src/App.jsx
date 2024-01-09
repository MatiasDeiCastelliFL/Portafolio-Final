import Container from "@mui/material/Container";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Proyecto from "./components/pages/Proyecto";
import Navbar from "./components/navBar/Navbar";

const App = () => {
  return (
    <>
      <Container
        sx={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyecto />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
