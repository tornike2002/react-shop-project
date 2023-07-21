import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartReducer from "./components/features/cart/CartSlice"
export const store = configureStore({
  reducer: {
    cart: createReducer,
  },
});
