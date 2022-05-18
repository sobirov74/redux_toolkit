import { configureStore } from "@reduxjs/toolkit";
import getId from "./reducers/findByAliasSlice";
import cart from "./reducers/cartSlice";
import products from "./reducers/allProductsSlice";
import prodByAlias from "./reducers/productSlice";
// import cartReducer from "./reducers/cartReducer";

// const rootReducer = combineReducers({
//   product: cartSlice.reducer,
//   getProducts: getProductssReducer.reducer,
// });

export const store = configureStore({
  reducer: {
    products,
    getId,
    cart,
    prodByAlias,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
