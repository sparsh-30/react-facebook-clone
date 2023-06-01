import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showStoryScreen: false,
  showPictureScreen: false,
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
    displayPictureScreen: (state) => {
      state.showPictureScreen = true;
    },
    hidePictureScreen: (state) => {
      state.showPictureScreen = false;
    },
  },
});

export const {
  displayStoryScreen,
  hideStoryScreen,
  displayPictureScreen,
  hidePictureScreen,
} = screenSlice.actions;

export default screenSlice.reducer;
