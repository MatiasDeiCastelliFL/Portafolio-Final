import { urlAPi } from "../../config/axios";
import {
  cargandoProfile,
  obtenerProfile,
} from "../reducers/reducersProfile";

export const obtenerProfiles = () => {
  return async (dispatch) => {
    dispatch(cargandoProfile());
    const respuesta = await urlAPi.get("user/filter");
    dispatch(obtenerProfile({ profile: respuesta.data }));
  };
};

