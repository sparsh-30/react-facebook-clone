import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSignedIn: false,
  firstName: "",
  lastName: "",
  initial: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
      state.initial = action.payload.charAt(0);
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    signInUser: (state) => {
      state.userSignedIn = true;
    },
    signOutUser: (state) => {
      state.userSignedIn = false;
    },
  },
});

export const { setFirstName, setLastName, signInUser, signOutUser } =
  userSlice.actions;

export default userSlice.reducer;
