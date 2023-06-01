import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showStoryScreen: false,
};

export const screenSlice = createSlice({
  name: "showScreen",
  initialState,
  reducers: {
    displayStoryScreen: (state) => {
      state.showStoryScreen = true;
    },
    hideStoryScreen: (state) => {
      state.showStoryScreen = false;
    },
  },
});

export const { displayStoryScreen, hideStoryScreen } = screenSlice.actions;

export default screenSlice.reducer;
