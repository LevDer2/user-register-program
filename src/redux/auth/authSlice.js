import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./operatons";
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
   builder.addCase(login.fulfilled, (state, action) => {
     state.user.name = action.payload.name;
     state.user.email = action.payload.email;
     state.token = action.payload.token;
     state.isLoggedIn = true;
   });

    builder.addCase(login.rejected, (state, action) => {
  state.error= action.payload
})

  }
});


export default authSlice.reducer
