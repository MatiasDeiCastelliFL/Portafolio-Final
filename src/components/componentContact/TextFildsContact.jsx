import { Grid, TextField } from "@mui/material";
import { emptyField } from "../../functions/global";

const TextFildsContact = ({ textFild, values, setValues, err, setError }) => {
  const handleOnchange = (name, value) => {
    setValues((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    if (value.email !== "") {
      emptyField("email", setError);
    }
    if (value.name !== "") {
      emptyField("name", setError);
    }
    if (value.affair !== "") {
      emptyField("affair", setError);
    }
    if (value.message !== "") {
      emptyField("message", setError);
    }
  };
  return textFild.map((contact) => (
    <Grid
      item
      xs={12}
      sm={contact.title != "correo" && contact.title != "mensaje" && 6}
      key={contact.title}
    >
      <TextField
        type={contact.title == "correo" && "email"}
        label={contact.title[0].toUpperCase() + contact.title.slice(1)}
        placeholder={contact.placeholder}
        variant="outlined"
        fullWidth
        multiline={contact.title == "mensaje" && true}
        rows={contact.title == "mensaje" && 4}
        value={values[contact.title_]}
        error={err[contact.title_]?.estado}
        helperText={err[contact.title_]?.mensaje}
        onChange={(e) => handleOnchange(contact.title_, e.target.value)}
      />
    </Grid>
  ));
};

export default TextFildsContact;
