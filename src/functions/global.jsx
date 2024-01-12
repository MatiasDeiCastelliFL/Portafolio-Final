import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const redes = {
  fontSize: "40px",
  textTransform: "uppercase",
  transition: "all 500ms cubic-bezier(0.77, 0, 0.175, 1)",
  cursor: "pointer",
  userSelect: "none",
  textAlign: "center",
};
export const stateEmail = () => {
  return {
    name: "",
    affair: "",
    email: "",
    message: "",
  };
};

export const stateError = () => {
  return {
    nombre: {
      estado: false,
      mensaje: "",
    },
    asunto: {
      estado: false,
      mensaje: "",
    },
    email: {
      estado: false,
      mensaje: "",
    },
    mensaje: {
      estado: false,
      mensaje: "",
    },
  };
};

export const stateMensaje = (key, message, acumulator) => {
  return (acumulator[key] = {
    estado: true,
    mensaje: message,
  });
};

export const emptyField = (key, state) => {
  return state((errorInfo) => ({
    ...errorInfo,
    [key]: {
      estado: false,
      mensaje: "",
    },
  }));
};

export const listArray = () => {
  return [
    {
      title: "nombre",
      title_: "name",
      placeholder: "Ingrese su nombre",
      state: false,
    },
    {
      title: "asunto",
      title_: "affair",
      placeholder: "Ingrese su asunto",
    },
    {
      title: "correo",
      title_: "email",
      placeholder: "Ingrese su email",
    },
    {
      title: "mensaje",
      title_: "message",
      placeholder: "Ingrese su mensaje",
    },
  ];
};

export const listArrayRed = [
  {
    href: "https://www.instagram.com/matiasdeicastelli/",
    icon: <InstagramIcon style={redes} />,
    key: 1,
  },
  {
    href: "https://github.com/MatiasDeiCastelliFL",
    icon: <GitHubIcon style={redes} />,
    key: 2,
  },
  {
    href: "https://www.linkedin.com/in/matias-marcelo-dei-castelli-59b811222/",
    icon: <LinkedInIcon style={redes} />,
    key: 3,
  },
];
