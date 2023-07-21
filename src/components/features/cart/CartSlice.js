import { createSlice } from "@reduxjs/toolkit";

const url = "https://fakestoreapi.com/products";
const initialState = {
  cartItems: [],
  amount: 30,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  Reducer: {},
});

export default cartSlice.reducer;
