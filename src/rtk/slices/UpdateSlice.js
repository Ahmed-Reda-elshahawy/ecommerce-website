import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    show: false,
    hide: true,
    updatingProduct: {}
}

export const UpdateSlice = createSlice({
    name: "UpdateSlice",
    initialState,
    reducers: {
        ShowUpdate: (state) => {
            state.show = true;
            state.hide = false;
        },
        HideUpdate: (state) => {
            state.show = false;
            state.hide = true;
        },
        updatingItem: (state, action) => {
            state.updatingProduct = action.payload;
        }
    }
});

export const { ShowUpdate, HideUpdate, updatingItem } = UpdateSlice.actions;
export default UpdateSlice.reducer;