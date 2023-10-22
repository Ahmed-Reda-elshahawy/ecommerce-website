import { createSlice } from "@reduxjs/toolkit";



export const RegisterSlice = createSlice({
    name: "RegisterSlice",
    initialState: { show: false },
    reducers: {
        ShowReg: (state, action) => {
            state.show = true;
            return state;
        },
        CloseReg: (state, action) => {
            state.show = false;
            return state;
        }
    }
});


export const { ShowReg, CloseReg } = RegisterSlice.actions;
export default RegisterSlice.reducer;