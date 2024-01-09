import styled from "@emotion/styled";

export const CardProyectos = styled("div")(() => ({
  width: 350,
  height: 480,
  display: "flex",
  flexDirection: "column",
  background: "white",
}));

export const CardProyectosFlex = styled("div")(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",

  [theme.breakpoints.down("sg")]: {
    flexDirection: "column",
  },
}));

export const CardHerramienta = styled("div")(() => ({
  borderRadius: "25%",
  backgroundColor: "#fff",
  width: "250px",
}));

export const CardGeneralProyect = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: "20px",

  [theme.breakpoints.down("lgs")]: {
    gridTemplateColumns: "repeat(1,1fr)",
  },
}));

export const ImgCateristicaProyect = styled("img")(() => ({
  width: "35px",
  height: "35px",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "50%",
}));
