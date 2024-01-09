import { createSlice } from "@reduxjs/toolkit";
export const clientSlice = createSlice({
  name: "client",
  initialState: {
    cargando: false,
    profile: {},
    login: {},
  },
  reducers: {
    cargandoProfile: (state) => {
      state.cargando = true;
    },
    obtenerProfile: (state, action) => {
      state.cargando = false;
      state.profile = action.payload.profile;
    },
  },
});
export const { cargandoProfile, obtenerProfile } = clientSlice.actions;
export default clientSlice.reducer;
