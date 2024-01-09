import { urlAPi } from "../../config/axios";
import {
  cargandoCategories,
  obtenerCategories,
} from "../reducers/reducersCategories";

export const Categories = (offset = 1) => {
  return async (dispatch) => {
    dispatch(cargandoCategories());
    const respuesta = await urlAPi.get(
      `proyect/categories?limit=3&offset=${offset}`
    );
    dispatch(obtenerCategories(respuesta.data));
  };
};
