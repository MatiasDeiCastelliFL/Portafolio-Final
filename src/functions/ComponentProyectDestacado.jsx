import styled from "@emotion/styled";

export const TextContactTitle = styled("Typography")(() => ({
  fontSize: "3rem",
  color: "#fff",
  textAlign: "center",
}));

export const BoxComponentCard = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("mf")]: {
    height: "auto",
  },
}));
