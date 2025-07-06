
import { createAsyncThunk } from "@reduxjs/toolkit";

 export const loginuserthunk =createAsyncThunk(
    'users/fetchbyid',
    async () =>{
      console.log("hello");
    }
)