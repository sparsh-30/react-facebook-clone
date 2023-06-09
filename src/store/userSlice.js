import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSignedIn: false,
  firstName: "",
  lastName: "",
  avatarURL: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setAvatarURL: (state, action) => {
      state.avatarURL = action.payload;
    },
    signInUser: (state) => {
      state.userSignedIn = true;
    },
    signOutUser: (state) => {
      state.userSignedIn = false;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setAvatarURL,
  signInUser,
  signOutUser,
} = userSlice.actions;

export default userSlice.reducer;
