import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

export const quantitySlice = createSlice({
    name: "quantitySlice",
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            state.value += 1;
        },
        decreaseQuantity: (state) => {
            if (state.value >= 2) {
                state.value -= 1
            }
        }
    }
});

export const { increaseQuantity, decreaseQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;