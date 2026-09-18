import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operatons";
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
    

    builder.addCase(logOut.fulfilled, (state) => {
       state.user.name = null
       state.user.email = null
       state.token = null
       state.isLoggedIn = false;
    })


    builder.addCase(refreshUser.pending, (state) => {
  state.isRefreshing = true 
})


    builder.addCase(refreshUser.fulfilled, (state, action) => {
       state.user.name = action.payload.name;
       state.user.email = action.payload.email;
       state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })

    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing= false
    })
  }


});


export default authSlice.reducer
