import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storyImageURL: "",
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setStoryImageURL: (state, action) => {
      state.storyImageURL = action.payload;
    },
  },
});

export const { setStoryImageURL } = imageSlice.actions;

export default imageSlice.reducer;
