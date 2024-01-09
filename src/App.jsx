import Container from "@mui/material/Container";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Proyecto from "./components/pages/Proyecto";
import Navbar from "./components/navBar/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { obtenerProfiles } from "./redux/actions/ThunksProfile";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerProfiles());
  }, []);
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
