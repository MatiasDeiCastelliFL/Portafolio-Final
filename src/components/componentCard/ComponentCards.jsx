import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { NavLink } from "react-router-dom";
import ComponentDestacado from "./componentDestacado";
import {
  BoxComponentCard,
  TextContactTitle,
} from "../../functions/ComponentProyectDestacado";
import { obtenerProjectoFillter } from "../../redux/actions/ThunksProyecto";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export const ComponentCards = ({ name }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerProjectoFillter());
  }, []);
  const proyectos = useSelector((state) => state.project.project);
  return (
    <BoxComponentCard>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <TextContactTitle>{name}</TextContactTitle>
        {name == "DESTACADOS" && (
          <Box component={NavLink} to="/proyecto" title="Todos los proyectos">
            <ArrowOutwardIcon fontSize="large" sx={{ color: "#fff" }} />
          </Box>
        )}
      </Box>

      <Box className="scroll">
        {proyectos.getProyect &&
          proyectos.getProyect
            .slice(0, 3)
            .map((proyect) => (
              <ComponentDestacado key={proyect.id} component={proyect} />
            ))}
        <Box />
      </Box>
    </BoxComponentCard>
  );
};
ComponentCards.propTypes = undefined;
