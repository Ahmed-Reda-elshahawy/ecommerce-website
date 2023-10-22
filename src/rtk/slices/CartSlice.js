import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "countSlice",
    initialState: [],
    reducers: {
        AddToCart: (state, action) => {
            const findedEl = state.find((ele) => ele.id === action.payload.id);
            if (!findedEl) {
                let newState = { ...action.payload, quantity: 1 };
                state.push(newState);
            }
        },
        RemoveFromCart: (state, action) => {
            state = state.filter((ele) => ele.id !== action.payload);
            return state;
        },
        increaseQuantity: (state, action) => {
            let findedProduct = state.find((ele) => ele.id === action.payload.id);
            if (findedProduct) {
                findedProduct.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            let findedProduct = state.find((ele) => ele.id === action.payload.id);
            if (findedProduct) {
                (findedProduct.quantity >= 2 && (findedProduct.quantity -= 1));
            }
        },
        ClearCart: (state, action) => {
            state = [];
            return state;
        }
    }
})

export const { AddToCart, RemoveFromCart, increaseQuantity, decreaseQuantity, ClearCart } = CartSlice.actions;
export default CartSlice.reducer;