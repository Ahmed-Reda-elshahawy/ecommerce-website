import { createSlice } from "@reduxjs/toolkit";

const LogInOutSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        loginUser: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            let newUser = JSON.parse(localStorage.getItem("user"));
            state = newUser;
            return state;
        },
        logout: (state) => {
            localStorage.removeItem("user");
            state = {};
            return state;
        },
    },
});

export const { loginUser, logout } = LogInOutSlice.actions;
export default LogInOutSlice.reducer;