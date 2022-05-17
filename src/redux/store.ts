import { configureStore } from "@reduxjs/toolkit";
import getProductId from "./reducers/getProduct";
import cartSlice from "./reducers/cartSlice";
import fetchProduct from "./reducers/fetchProduct";
import cartReducer from "./reducers/cartReducer";

// const rootReducer = combineReducers({
//   product: cartSlice.reducer,
//   getProducts: getProductssReducer.reducer,
// });

export const store = configureStore({
  reducer: {
    product: cartSlice,
    getId: getProductId,
    fetchProduct,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
