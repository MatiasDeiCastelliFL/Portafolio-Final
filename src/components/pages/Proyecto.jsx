import {
  Typography,
  Container,
  Button,
  Box,
  Pagination,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardActions from "@mui/material/CardActions";
import {
  CardProyectos,
  CardProyectosFlex,
  ImgCateristicaProyect,
} from "../../functions/ComponentProyect";
import { useLocation } from "react-router-dom";
import { obtenerProjectoFillter } from "../../redux/actions/ThunksProyecto";
const Proyecto = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limipag, setLimitPage] = useState(4);
  const handleChange = (e, p) => {
    setPage(p);
  };
  useEffect(() => {
    dispatch(obtenerProjectoFillter(limipag, 1));
  }, []);

  useEffect(() => {
    dispatch(obtenerProjectoFillter(limipag, page));
  }, [limipag]);

  useEffect(() => {
    dispatch(obtenerProjectoFillter(limipag, page));
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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

  const proyectos = useSelector((state) => state.project);
  return (
    <Container maxWidth="lg" className="containerProyect">
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "70px", color: "#fff" }}
      >
        Proyectos
      </Typography>
      {!proyectos.cargando ? (
        <div>
          <CardProyectosFlex>
            {proyectos.project.getProyect &&
              proyectos.project.getProyect.map((result, index) => (
                <Box key={index}>
                  <CardProyectos>
                    <Box
                      sx={{
                        backgroundImage: `url(${result.imagen})`,
                        height: "100%",
                        width: "100%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          width: "45%",
                          padding: 1,
                          textAlign: "center",
                          paddingTop: "2px",
                          paddingLeft: "2px",
                          margin: "2px",
                        }}
                      >
                        <Typography
                          variant="h5"
                          component="h1"
                          style={{
                            fontSize: "20px",
                            borderRadius: "4px",
                            fontWeight: "bold",
                            color: "#fff",
                            backgroundColor: "rgb(0, 33, 65)",
                          }}
                        >
                          {result.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "auto",
                          padding: 0,
                          position: "absolute",
                          bottom: 50,
                          left: 0,
                          right: 0,
                          backgroundColor: "rgb(0 33 65 / 80%)",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: "bold",
                            paddingBottom: "20px",
                            marginTop: "5px",
                          }}
                        >
                          Descripción
                        </Typography>
                        <Box>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              height: 80,
                              width: "80%",
                              textAlign: "center",
                              margin: "auto",
                              color: "#fff  ",
                              fontWeight: "bold",
                            }}
                          >
                            {result.descriptions}
                          </Typography>
                          <Typography
                            textAlign={"center"}
                            color={"#fff"}
                            sx={{ fontSize: "20px" }}
                          >
                            Herramienta
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "20px",
                              marginTop: "20px",
                              marginBottom: "20px",
                            }}
                          >
                            {result.categories.map((categories) => (
                              <Box
                                key={categories.id}
                                variant="body2"
                                color="text.secondary"
                                title={categories.name}
                                sx={{
                                  textAlign: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <Box>
                                  <ImgCateristicaProyect
                                    src={categories.imagen}
                                    alt={categories.name}
                                  />
                                  <Typography
                                    component={"p"}
                                    sx={{ fontSize: "13px", color: "#fff" }}
                                  >
                                    {categories.name}
                                  </Typography>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                      <CardActions
                        sx={{
                          marginTop: "auto",
                          padding: 0,
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                        }}
                      >
                        <Button
                          sx={{
                            textAlign: "left",
                            backgroundColor: "secondary",
                            borderRadius: 0,
                            flexGrow: 1,
                          }}
                          variant="contained"
                          component="a"
                          href={result.url}
                          target="_blank"
                        >
                          Repositorio
                        </Button>
                      </CardActions>
                    </Box>
                  </CardProyectos>
                </Box>
              ))}
          </CardProyectosFlex>
          <Pagination
            count={Math.ceil(proyectos.project.count / 4)}
            onChange={handleChange}
            page={page}
            key="pagination-bottom"
            sx={{
              background: "#fff",
              borderRadius: "50px",
              maxWidth: "fit-content",
              margin: "auto",
              marginTop: "50px",
              "& .MuiPaginationItem-root": {
                borderRadius: "100%",
                width: "24px",
                height: "24px",
                margin: "4px 4px",
                fontSize: "14px",
                "&.Mui-selected": {
                  backgroundColor: "rgb(1, 23, 45)",
                  color: "#fff",
                },
              },
            }}
            color="primary"
          />
        </div>
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
    </Container>
  );
};
Proyecto.propTypes = undefined;
export default Proyecto;
