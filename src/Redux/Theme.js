import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: (state) => {
      state.dark = !state.dark;
    },
  }
});

// Action creators are generated for each case reducer function
export const { change } = themeSlice.actions;

export default themeSlice.reducer;