import styled from "@emotion/styled";

export const Img = styled("img")(() => ({
  width: "400px",
  height: "400px",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "50%",
}));
export const About = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",

  [theme.breakpoints.between("xs", "lf")]: {
    flexDirection: "column-reverse",
  },
}));
export const ContentImg = styled("div")(({ theme }) => ({
  [theme.breakpoints.between("xs", "lf")]: {
    width: "100%",
    backgroundSize: "cover",
    textAlign: "center",
    [theme.breakpoints.down("lf")]: {
      marginTop: "70px",
    },
  },
}));
export const ContentText = styled("div")(() => ({
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));
export const AboutText = styled("span")(() => ({
  textAlign: "center",
  fontSize: "3rem",
}));
export const AboutDescriptions = styled("span")(({ theme }) => ({
  width: "80%",
  fontSize: "1.3rem",
  marginTop: "20px",
  [theme.breakpoints.down("lf")]: {
    width: "80%",
  },
  [theme.breakpoints.down("sd")]: {
    fontSize: "1.2rem",
    width: "70%",
  },

  [theme.breakpoints.down("se")]: {
    fontSize: "1.1rem",
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    textAlign: "justify",
    fontSize: "20px",
  },

  [theme.breakpoints.down("ld")]: {
    // height: "100vh",
  },
}));

export const General = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
