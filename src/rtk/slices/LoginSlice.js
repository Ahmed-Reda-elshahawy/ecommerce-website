import { createSlice } from "@reduxjs/toolkit";



export const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState: { show: false },
    reducers: {
        ShowLogin: (state, action) => {
            state.show = true;
            return state;
        },
        CloseLogin: (state, action) => {
            state.show = false;
            return state;
        }
    }
});


export const { ShowLogin, CloseLogin } = LoginSlice.actions;
export default LoginSlice.reducer;