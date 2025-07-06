import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./slice/user/user.slice";
export const store = configureStore({
  reducer: {
    userreducer,
  },
});
