import {
  Grid,
  Typography,
  Container,
  CardHeader,
  Box,
  CardActionArea,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
import { CardHerramienta } from "../../functions/ComponentProyect";
import { Categories } from "../../redux/actions/ThunksCategories";
import styled from "@emotion/styled";
const Herramienta = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    dispatch(Categories(page));
  }, [page]);

  useEffect(() => {
    dispatch(Categories());
  }, []);

  const GridCard = styled("Grid")(({ theme }) => ({
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "20px",
    [theme.breakpoints.down("mdf")]: {
      flexDirection: "column",
    },
  }));

  const categories = useSelector((state) => state.categories);
  return (
    <Box
      id="herramientas"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "-webkit-center",
          padding: "30px",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginTop: "70px",
            marginBottom: "70px",
            color: "#fff",
            fontSize: "3rem",
          }}
        >
          HERRAMIENTAS
        </Typography>
        <GridCard
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          {categories.categories.getCategory &&
            categories.categories.getCategory.map((result, index) => (
              <Grid
                item
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "30px",
                }}
              >
                <CardHerramienta>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        height: "194px",
                        width: "200px",
                        padding: "20px",
                      }}
                      src={result.imagen}
                      alt={result.name}
                    />

                    <CardHeader
                      title={
                        <Box sx={{ textAlign: "center" }}>
                          <Box>{result.name}</Box>
                        </Box>
                      }
                    />
                  </CardActionArea>
                </CardHerramienta>
              </Grid>
            ))}
        </GridCard>
      </Container>
      <Pagination
        count={Math.ceil(categories.categories.count / 3)}
        onChange={handleChange}
        sx={{
          background: "#fff",
          borderRadius: "50px",
          maxWidth: "fit-content", // Establecer el ancho máximo a "fit-content"
          marginTop: "10px",
          margin: "auto",
          "& .MuiPaginationItem-root": {
            // Estilos específicos para los elementos de paginación
            borderRadius: "100%", // Hace que los elementos de paginación sean círculos
            width: "24px", // Ajusta el ancho del círculo
            height: "24px", // Ajusta la altura del círculo
            margin: "4px 4px", // Ajusta el espacio entre los elementos
            fontSize: "14px", // Ajusta el tamaño del número en el círculo
            "&.Mui-selected": {
              backgroundColor: "rgb(1, 23, 45)", // Cambia el color del círculo cuando está seleccionado
              color: "#fff", // Cambia el color del texto cuando está seleccionado
            },
          },
        }}
        color="primary"
      />
    </Box>
  );
};
Herramienta.propTypes = undefined;
export default Herramienta;
