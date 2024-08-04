import { createSlice } from "@reduxjs/toolkit";
import { setCookie, deleteCookie, getCookie } from "../../utils/ConfigCookies";

const initialState = {
  accessToken: getCookie("accessToken"),
};

const Authentication = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload;
      setCookie("accessToken", action.payload, { expires: 7 });
    },
    logout: (state) => {
      state.accessToken = null;
      deleteCookie("accessToken");
    },
  },
});

export const { login, logout } = Authentication.actions;
export default Authentication.reducer;