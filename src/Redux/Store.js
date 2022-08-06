import { configureStore } from "@reduxjs/toolkit";
import SidemenuMarginReducer from "./SidemenuMargin";

export const Store = configureStore({
  reducer: {
    margin: SidemenuMarginReducer
  }
});