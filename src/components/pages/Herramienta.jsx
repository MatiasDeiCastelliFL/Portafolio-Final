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
          maxWidth: "fit-content",
          margin: "auto",
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
    </Box>
  );
};
Herramienta.propTypes = undefined;
export default Herramienta;
