import {createSlice} from "@reduxjs/toolkit";

import { fetchAllUsers } from "./users-operations";

const initialState = {
    users: [],
    loading: false,
    error: null,
    totlaUsers: 0,
    filter: 'show all',
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllUsers.pending, (store) => {
            store.loading = true;
        })
        .addCase(fetchAllUsers.fulfilled, (store, { payload }) => {
            store.loading = false;
            store.error = null;
            store.users = payload;
            store.totlaUsers = payload.total;
            
        })
        .addCase(fetchAllUsers.rejected, (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        })
        
    }
});

export default usersSlice.reducer;