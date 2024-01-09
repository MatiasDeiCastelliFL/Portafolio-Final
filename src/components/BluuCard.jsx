import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const BluuCard = () => {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/300"
          height="200px"
          alt="Imagen"
        />
        <CardContent>
          <Typography component="h4">Card Title</Typography>
          <Typography component="p" variant="body2">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="success">Add</Button>
        <Button color="error">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default BluuCard;
