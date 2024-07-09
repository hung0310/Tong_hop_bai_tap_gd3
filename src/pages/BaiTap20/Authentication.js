import { createSlice } from "@reduxjs/toolkit";
import { setCookie, deleteCookie, getCookie } from './ConfigCookie';

const initialState = {
  checkLogin: getCookie('auth') === 'true',
};

const Authentication = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.checkLogin = true;
      setCookie('auth', 'true', 7);
    },
    logout: (state) => {
      state.checkLogin = false;
      deleteCookie('auth'); 
    },
  },
});

export const { login, logout } = Authentication.actions;
export default Authentication.reducer;