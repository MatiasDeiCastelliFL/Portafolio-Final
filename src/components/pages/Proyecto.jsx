import {
  CardContent,
  Typography,
  Container,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
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
  const [limipag, setLimitPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p);
  };
  useEffect(() => {
    dispatch(obtenerProjectoFillter(limipag, 1));
  }, []);

  useEffect(() => {
    setPage(1);
    dispatch(obtenerProjectoFillter(limipag, page));
  }, [limipag]);

  useEffect(() => {
    dispatch(obtenerProjectoFillter(limipag, page));
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);

      const newLimit =
        newWidth <= 771 ? 1 : newWidth >= 772 && newWidth <= 1188 ? 2 : 3;
      setLimitPage(newLimit);
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const proyectos = useSelector((state) => state.project);
  return (
    <Container maxWidth="lg" className="containerProyect">
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "50px", color: "#fff" }}
      >
        Proyectos
      </Typography>

      <CardProyectosFlex>
        {proyectos.project.getProyect &&
          proyectos.project.getProyect.map((result, index) => (
            <Box key={index}>
              <CardProyectos
                sx={{
                  width: 300,
                  height: 400,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="170"
                  image={result.imagen}
                />
                <CardContent sx={{ padding: "18px", flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ height: 80 }}
                  >
                    {result.descriptions}
                  </Typography>
                  <CardContent
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {result.categories.map((categories) => (
                      <Box
                        key={categories.id}
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Box>
                          <ImgCateristicaProyect
                            src={categories.imagen}
                            alt={categories.name}
                          />
                          <Typography sx={{ fontSize: 15 }}>
                            {categories.name}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </CardContent>
                <CardActions sx={{ marginTop: "auto" }}>
                  <Button
                    sx={{
                      flexGrow: 1,
                      textAlign: "left",
                      backgroundColor: "secondary",
                    }}
                    variant="contained"
                    component="a"
                    href={result.url}
                    target="_blank"
                  >
                    Repositorio
                  </Button>
                  {result.urlDesploy != null ? (
                    <Button
                      sx={{
                        flexGrow: 1,
                        textAlign: "left",
                        backgroundColor: "secondary",
                      }}
                      variant="contained"
                      component="a"
                      href={result.urlDesploy}
                      target="_blank"
                    >
                      Desploy
                    </Button>
                  ) : null}
                </CardActions>
              </CardProyectos>
            </Box>
          ))}
      </CardProyectosFlex>
      <Pagination
        count={Math.ceil(proyectos.project.count / limipag)}
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
    </Container>
  );
};
Proyecto.propTypes = undefined;
export default Proyecto;
