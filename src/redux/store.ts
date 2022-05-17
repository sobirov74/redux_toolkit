import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";

// const rootReducer = combineReducers({
//   product: cartSlice.reducer,
//   getProduct: getProductsReducer.reducer,
// });

export const store = configureStore({
  reducer: {
    product: cartSlice,
    // getProduct: getProductsReducer.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
