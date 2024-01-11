import { createSlice } from "@reduxjs/toolkit";
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    cargando: false,
    categories: [],
  },
  reducers: {
    cargandoCategories: (state /* action */) => {
      state.cargando = true;
    },
    obtenerCategories: (state, action) => {
      state.cargando = false;
      state.categories = action.payload;
    },
  },
});
export const { cargandoCategories, obtenerCategories } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
