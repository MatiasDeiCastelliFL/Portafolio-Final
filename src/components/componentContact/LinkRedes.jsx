import { Button } from "@mui/material";
import { listArrayRed } from "../../functions/global";

const LinkRedes = () => {
  return listArrayRed.map((red) => (
    <Button
      key={red.key}
      component="a"
      href={red.href}
      target="_blank"
      sx={{
        color: "black",
        transition: "transform 0.6s",
        "&:hover": {
          color: "white",
          bgcolor: "rgb(1, 23, 45)",
          borderRadius: "50px",
          transform: "rotateY(360deg)",
        },
      }}
    >
      {red.icon}
    </Button>
  ));
};

export default LinkRedes;
