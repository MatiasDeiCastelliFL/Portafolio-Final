import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducersProyect from "../reducers/reducersProyect.js";
import reducersProfile from "../reducers/reducersProfile.js";
import reducersCategories from "../reducers/reducersCategories.js";
const rootReducer = combineReducers({
  project: reducersProyect,
  profile: reducersProfile,
  categories: reducersCategories,
});
export default configureStore({ reducer: rootReducer });
