import { configureStore } from "@reduxjs/toolkit";
import SidemenuMarginReducer from "./SidemenuMargin";
import ThemeReducer from "./Theme";

export const Store = configureStore({
  reducer: {
    margin: SidemenuMarginReducer,
    dark: ThemeReducer
  }
});