import {createSlice} from "@reduxjs/toolkit";

import { fetchAllUsers } from "./users-operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
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
            store.items = payload;
        })
        .addCase(fetchAllUsers.rejected, (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        })
        // .addCase(fetchAddContact.pending, (store) => {
        //     store.loading = true;
        // })
        // .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        //     store.loading = false;
        //     store.error = null;
        //     store.items.push(payload);
        // })
        // .addCase(fetchAddContact.rejected, (store, { payload }) => {
        //     store.loading = false;
        //     store.error = payload;
        // })
        // .addCase(fetchDeleteContact.pending, (store) => {
        //     store.loading = true;
        // })
        // .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        //     store.loading = false;
        //     store.error = null
        //     const index = store.items.findIndex(item => item.id === payload);
        //     store.items.splice(index, 1);
        // })
        // .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        //     store.loading = false;
        //     store.error = payload;
        // })
    }
});

export default contactsSlice.reducer;