import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOperation = (name, request, condition) => {
    return createAsyncThunk(
        name,
        async (data, { rejectWithValue })=> {
        try {
            const response = await request(data);
            console.log('response', response)
            return response;
         }
        catch (error) {
            return rejectWithValue(error)
        }
    },
        {condition}
    )
}

export const pending = (store) => ({ ...store, loading: true, error: null });
export const rejected = (store, { payload }) => ({ ...store, loading: false, error: payload });
