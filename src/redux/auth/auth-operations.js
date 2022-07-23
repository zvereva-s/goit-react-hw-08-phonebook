import { createAsyncThunk } from "@reduxjs/toolkit";

import { createOperation } from 'shared/services/utils/utils';
import {signup, login, logout, getCurrent}  from 'shared/services/API/auth';

export const signupRequest = createOperation('auth/signup', signup);
export const loginRequest = createOperation('auth/login', login);
export const logoutRequest = createOperation('auth/logout', logout);
export const getCurrentRequest=createAsyncThunk(
        'auth/current',
        async (_, { rejectWithValue , getState})=> {
            try {
            const { auth } = getState();
            const response = await getCurrent(auth.token);  
            return response;
         }
        catch (error) {
            return rejectWithValue(error)
        }
    },
    {condition: (_, { getState }) => {
        const { auth } = getState();
        if (!auth.token) {
            return false; 
           }
       }}
    )