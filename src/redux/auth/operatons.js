import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockRegister } from "./mockApi";

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