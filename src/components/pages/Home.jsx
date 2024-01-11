import Contacto from "./Contacto";
import AboutMi from "../componentHome/AboutMi";
import { General } from "../../functions/ComponentHome";
import Herramienta from "./Herramienta";
import Component from "../componentCard/Component";
import { obtenerProfiles } from "../../redux/actions/ThunksProfile";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerProfiles());
  }, []);
  const cargando = useSelector((State) => State.profile.cargando);
  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              margin: "autos",
            }}
          >
            <Typography sx={{ fontSize: "40px" }}>Cargando</Typography>
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              sx={{ fontSize: "100px", color: "white", margin: "autos" }}
            >
              {`${Math.round(props.value)}%`}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box>
      {!cargando ? (
        <General>
          <AboutMi />
          <Component name="DESTACADOS" />
          <Herramienta />
          <Contacto />
        </General>
      ) : (
        <Box
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#fff",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <CircularProgressWithLabel
            value={progress}
            sx={{ color: "#fff", width: 400, display: "flex " }}
            variant="determinate"
            size={400}
          />
        </Box>
      )}
    </Box>
  );
};

export default Home;
