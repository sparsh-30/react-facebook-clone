import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import screenSlice from "./screenSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    screen: screenSlice,
  },
});
