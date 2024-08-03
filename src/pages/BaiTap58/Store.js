import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authentication";

const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default Store;