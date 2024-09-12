import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import snackbarSlice from "./snackbarSlice";
import restaurantUpdateSlice from "./restaurantUpdateSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    snackbar: snackbarSlice,
    restaurantUpdate: restaurantUpdateSlice,
  },
});

export default appStore;
