import { urlAPi } from "../../config/axios";
import {
  cargandoProyect,
  obtenerProjecto,
} from "../reducers/reducersProyect.js";
export const obtenerProjectoFillter = (limit=3, page = 1) => {
  return async (dispatch) => {
    dispatch(cargandoProyect());
    const response = await urlAPi.get(`proyect/filter?limit=${limit}&offset=${page}`);
    console.log(response);
    dispatch(obtenerProjecto(response.data));
  };
};
