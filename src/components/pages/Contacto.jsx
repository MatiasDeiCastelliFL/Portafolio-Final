import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { urlAPi } from "../../config/axios";
import { enqueueSnackbar } from "notistack";
import ButtonContact from "../componentContact/ButtonContact";
import TextFildsContact from "../componentContact/TextFildsContact";
import {
  listArray,
  stateEmail,
  stateError,
  stateMensaje,
} from "../../functions/global";
import LinkRedes from "../componentContact/linkRedes";
import {
  CardContentContact,
  Contact,
  ContactRed,
  FormuContact,
  TextContact,
} from "../../functions/ComponentContact";

const Contacto = () => {
  const [values, setValues] = React.useState(stateEmail());

  const [err, setError] = React.useState(stateError());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const enviar = await urlAPi.post("user/envio", values);
      if (enviar.status == 201) {
        enqueueSnackbar("Correo enviado correctamente", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
      setValues(stateEmail());
      setError(stateError());
    } catch (error) {
      enqueueSnackbar("Error al tratar de enviar el correo", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });

      const serverErrors = await error.response.data.message;
      const updatedErrorState = serverErrors.reduce(
        (stateAcumulator, valor) => {
          console.log(valor);
          switch (true) {
            case valor.includes("email"):
              stateMensaje("email", "Ingrese un email", stateAcumulator);
              break;
            case valor.includes("name"):
              stateMensaje("name", "Ingrese un nombre", stateAcumulator);
              break;
            case valor.includes("affair"):
              stateMensaje("affair", "Ingrese un asunto", stateAcumulator);
              break;
            case valor.includes("message"):
              stateMensaje("message", "Ingrese un mensaje", stateAcumulator);
              break;
            default:
              break;
          }
          return stateAcumulator;
        },
        { ...error.response.data.message }
      );
      setError((errorInfo) => ({
        ...errorInfo,
        ...updatedErrorState,
      }));
    }
  };

  return (
    <Contact>
      <TextContact id="contactos">CONTACTOS</TextContact>
      <FormuContact onSubmit={handleSubmit}>
        <CardContentContact xs={8}>
          <Grid container spacing={1}>
            <TextFildsContact
              textFild={listArray()}
              values={values}
              setValues={setValues}
              err={err}
              setError={setError}
            />
            <Grid item xs={12} textAlign="end">
              <ButtonContact />
            </Grid>
          </Grid>
          <Box>
            <Typography textAlign="center" textTransform={"uppercase"}>
              Redes Sociales
            </Typography>
            <ContactRed>
              <LinkRedes />
            </ContactRed>
          </Box>
        </CardContentContact>
      </FormuContact>
    </Contact>
  );
};
export default Contacto;
