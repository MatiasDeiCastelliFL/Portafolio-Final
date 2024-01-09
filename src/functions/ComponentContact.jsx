import styled from "@emotion/styled";

export const Contact = styled("div")(() => ({
  width: "80%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const TextContact = styled("Typography")(() => ({
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "3rem",
  marginBottom: "30px",
  color: "#fff",
}));

export const FormuContact = styled("form")(({ theme }) => ({
  flexDirection: "column",
  background: "#fff",
  alignItems: "center",
  borderRadius: "10%",
  padding: "2rem",
  [theme.breakpoints.down("sl")]: {
    padding: 0,
  },
}));
export const CardContentContact = styled("CardContent")(({ theme }) => ({
  maxWidth: "700px",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("me")]: {
    flexDirection: "column-reverse",
  },
}));

export const ContactRed = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
}));
