import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    show: false,
    hide: true
}

export const AddSlice = createSlice({
    name: "AddSlice",
    initialState,
    reducers: {
        ShowAdd: (state) => {
            state.show = true;
            state.hide = false;
        },
        HideAdd: (state) => {
            state.show = false;
            state.hide = true;
        }
    }
});

export const { ShowAdd, HideAdd } = AddSlice.actions;
export default AddSlice.reducer;