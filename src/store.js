
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/features/cart/cartSlice";



export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
