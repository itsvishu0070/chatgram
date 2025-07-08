// import { createSlice } from "@reduxjs/toolkit";
// import {
//   loginUserThunk,
//   registerUserThunk,
//   getUserProfileThunk,
//   logoutUserThunk,
//   getOtherUsersThunk,
// } from "./user.thunk";

// const initialState = {
//   isAuthenticated: false,
//   userProfile: null,
//   otherUsers: [],
//   selectedUser: null,
//   buttonLoading: false,
//   screenLoading: true,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setSelectedUser: (state, action) => {
//       state.selectedUser = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     // Login
//     builder.addCase(loginUserThunk.pending, (state) => {
//       state.buttonLoading = true;
//     });
//     builder.addCase(loginUserThunk.fulfilled, (state, action) => {
//       state.isAuthenticated = true;
//       state.userProfile = action.payload.responseData.user;
//       state.buttonLoading = false;
//     });
//     builder.addCase(loginUserThunk.rejected, (state) => {
//       state.buttonLoading = false;
//     });

//     // Register
//     builder.addCase(registerUserThunk.pending, (state) => {
//       state.buttonLoading = true;
//     });
//     builder.addCase(registerUserThunk.fulfilled, (state, action) => {
//       state.isAuthenticated = true;
//       state.userProfile = action.payload.responseData.newUser;
//       state.buttonLoading = false;
//     });
//     builder.addCase(registerUserThunk.rejected, (state) => {
//       state.buttonLoading = false;
//     });

//     // Get Profile
//     builder.addCase(getUserProfileThunk.pending, (state) => {
//       state.screenLoading = true;
//     });
//     builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
//       state.isAuthenticated = true;
//       state.userProfile = action.payload.responseData;
//       state.screenLoading = false;
//     });
//     builder.addCase(getUserProfileThunk.rejected, (state) => {
//       state.screenLoading = false; // ✅ Fix added here
//       state.isAuthenticated = false;
//     });

//     // Logout
//     builder.addCase(logoutUserThunk.fulfilled, (state) => {
//       localStorage.clear();
//       return initialState;
//     });

//     // Get Other Users
//     builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
//       state.otherUsers = action.payload.responseData;
//     });
//   },
// });

// export const { setSelectedUser } = userSlice.actions;
// export default userSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
  getUserProfileThunk,
  getOtherUsersThunk,
} from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  userProfile: null,
  otherUsers: [],
  buttonLoading: false,
  screenLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    // ========== Login ==========
    builder.addCase(loginUserThunk.pending, (state) => {
      state.buttonLoading = true;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload.responseData.user;
      state.isAuthenticated = true;
      state.buttonLoading = false;
    });
    builder.addCase(loginUserThunk.rejected, (state) => {
      state.buttonLoading = false;
      state.isAuthenticated = false;
    });

    // ========== Register ==========
    builder.addCase(registerUserThunk.pending, (state) => {
      state.buttonLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload.responseData.newUser;
      state.isAuthenticated = true;
      state.buttonLoading = false;
    });
    builder.addCase(registerUserThunk.rejected, (state) => {
      state.buttonLoading = false;
      state.isAuthenticated = false;
    });

    // ========== Get Profile ==========
    builder.addCase(getUserProfileThunk.pending, (state) => {
      state.screenLoading = true;
    });
    builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload.responseData;
      state.isAuthenticated = true;
      state.screenLoading = false;
    });
    builder.addCase(getUserProfileThunk.rejected, (state) => {
      state.screenLoading = false;
      state.isAuthenticated = false;
      state.userProfile = null;
    });

    // ========== Logout ==========
    builder.addCase(logoutUserThunk.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.userProfile = null;
      state.otherUsers = [];
    });

    // ========== Get Other Users ==========
    builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
      state.otherUsers = action.payload.responseData;
    });
  },
});

export const { setSelectedUser } = userSlice.actions;

export default userSlice.reducer;


