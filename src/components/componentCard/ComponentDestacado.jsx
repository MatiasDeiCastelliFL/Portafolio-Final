import { Box, Typography } from "@mui/material";
import React from "react";

const ComponentDestacado = ({ component }) => {
  return (
    <Box id="card">
      <Box component={"a"} href={component.url} target="_blank">
        <img id="list-img" src={component.imagen} />
      </Box>
      <Typography color={"#fff"} textAlign={"center"}>
        {component.name}
      </Typography>
      {
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "10px",
            marginTop:"10px"
          }}
        >
          {component.categories.map((category) => (
            <Typography color={"#fff"} textAlign={"center"} key={category.id}>
              {category.name}
            </Typography>
          ))}
        </Box>
      }
    </Box>
  );
};
ComponentDestacado.propTypes = undefined;
export default ComponentDestacado;
