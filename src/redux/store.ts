import { configureStore } from "@reduxjs/toolkit";
import getProductId from "./reducers/getProduct";
import cartSlice from "./reducers/cartSlice";

// const rootReducer = combineReducers({
//   product: cartSlice.reducer,
//   getProducts: getProductssReducer.reducer,
// });

export const store = configureStore({
  reducer: {
    product: cartSlice,
    getId: getProductId,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
