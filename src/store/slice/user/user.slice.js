import { createSlice } from "@reduxjs/toolkit";
import { loginuserthunk } from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  screenloading: false,
};

export const userslice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loginuserthunk.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(loginuserthunk.fulfilled, (state, action) => {
      console.log("fulfilled");
    });
    builder.addCase(loginuserthunk.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export const {} = userslice.actions;

export default userslice.reducer;
