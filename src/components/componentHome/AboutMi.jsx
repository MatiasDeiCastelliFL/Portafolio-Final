import { useSelector } from "react-redux";
import {
  About,
  AboutDescriptions,
  AboutText,
  ContentImg,
  ContentText,
  Img,
} from "../../functions/ComponentHome";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import LinkRedes from "../componentHome/LinkRedes";
import { Box } from "@mui/material";

const AboutMi = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const profile = useSelector((State) => State.profile.profile);
  return (
    <About id="home" imagen={profile.imagen}>
      <ContentText>
        <AboutText>SOBRE MI</AboutText>
        <AboutDescriptions>
          {`${profile?.name} ${profile?.descripcion}`}
        </AboutDescriptions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <LinkRedes />
        </Box>
      </ContentText>
      <ContentImg>
        <Img src={profile.imagen} />
      </ContentImg>
    </About>
  );
};

export default AboutMi;
