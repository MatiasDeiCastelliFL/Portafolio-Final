import { Button } from "@mui/material";

const ButtonContact = () => {
  return (
    <Button
      type="submit"
      sx={{
        position: "relative",
        fontSize: "1.1rem",
        color: "rgb(0, 33, 65)",
        textTransform: "uppercase",
        transition: "all 500ms cubic-bezier(0.77, 0, 0.175, 1)",
        cursor: "pointer",
        userSelect: "none",
        textAlign: "center",

        "&:before, &:after": {
          content: '""',
          position: "absolute",
          transition: "inherit",
          zIndex: -1,
          top: 0,
          width: 0,
          height: "100%",
        },

        "&:before": {
          left: 0,
          border: "1px solid red",
          borderLeft: 0,
          borderRight: 0,
        },

        "&:after": {
          right: 0,
        },

        "&:hover": {
          color: "#fff",
          backgroundColor: "rgb(1, 23, 45)",
          transitionDelay: ".5s",

          "&:before": {
            transitionDelay: "0s",
          },

          "&:after": {
            background: "rgb(0, 33, 65)",
            transitionDelay: ".35s",
          },
        },
      }}
    >
      Enviar
    </Button>
  );
};

export default ButtonContact;
