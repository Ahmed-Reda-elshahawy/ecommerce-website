import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ApiLink = "https://fakestoreapi.com/products";
// const ApiLink = "http://localhost:3000/products";

export const fetchCategories = createAsyncThunk("categoriesSlice/fetchCategories", async () => {
    const res = await fetch(`${ApiLink}/categories`);
    const data = await res.json();
    return data;
});

export const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})


export default categoriesSlice.reducer;