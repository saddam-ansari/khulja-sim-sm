import { configureStore } from "@reduxjs/toolkit";
import cartReucer from "./cartSlice";

const appStroe = configureStore({
  reducer: {
    cart: cartReucer,
  },
});

export default appStroe;
