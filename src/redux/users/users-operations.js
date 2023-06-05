import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/users-api";

export const fetchAllUsers = createAsyncThunk(
    "users/fetchAll",
    async({ page, filter }, thunkAPI) => {
        try {
            const data = await api.fetchUsers({ page, filter });
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
);

