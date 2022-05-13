import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

// const rootReducer = combineReducers({
//   product: cartSlice.reducer,
//   getProduct: getProductsReducer.reducer,
// });

export const store = configureStore({
  reducer: {
    product: cartSlice.reducer,
    // getProduct: getProductsReducer.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
