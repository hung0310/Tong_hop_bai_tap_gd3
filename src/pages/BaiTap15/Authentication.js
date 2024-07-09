import { createSlice } from "@reduxjs/toolkit";

const Authentication = createSlice( {
    name: 'auth',
    initialState: {
        checkLogin: false,
    },
    reducers: {
        login: (state) => {
            state.checkLogin = true;
        },

        logout: (state) => {
            state.checkLogin = false;
        }
    }
});

export const { login, logout } = Authentication.actions;
export default Authentication.reducer;