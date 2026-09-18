import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockRegister, mockLogin, mockLogOut, mockRefreshUser } from "./mockApi";

export const register = createAsyncThunk("auth/register", async(credentials, thunkApi) => {
    try{
        const response = await mockRegister(credentials)
        console.log(
          `Register ${response.name}: ${response.email}, ${response.token}:`,
        );
        return response
    }
    catch(error){
        return thunkApi.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const response = await mockLogin(credentials);
      
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut", 
  async (_, thunkApi) => {
    try {
      await mockLogOut();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const refreshUser = createAsyncThunk(
  "auth/refreshUser", 
  async (_, thunkApi) => {
    try {
      const responce = await mockRefreshUser()
      return responce
    } catch (error) {
       return thunkApi.rejectWithValue(error.message);
    }
  }
)
