import { createSlice } from "@reduxjs/toolkit";
export const proyectSlice = createSlice({
  name: "proyect",
  initialState: {
    cargando: false,
    project: [],
  },
  reducers: {
    cargandoProyect: (state /* action */) => {
      state.cargando = true;
    },
    obtenerProjecto: (state, action) => {
      state.cargando = false;
      state.project = action.payload;
    },
  },
});
export const { cargandoProyect, obtenerProjecto } = proyectSlice.actions;
export default proyectSlice.reducer;
