import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import screenSlice from "./screenSlice";
import image from "./imageSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    screen: screenSlice,
    image: image,
  },
});
