import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

const Products = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
        width: "50%",
      }}
    >
      <Img src="https://via.placeholder.com/300" />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 4 }}>
        <Typography variant="h4">Products Name</Typography>
        <Typography variant="body1">Products Description</Typography>
        <Button variant="contained">Add Card</Button>
      </Box>
      <Box sx={{ mr: 2 }} component="p">
        $19.99
      </Box>
    </Paper>
  );
};

export default Products;
