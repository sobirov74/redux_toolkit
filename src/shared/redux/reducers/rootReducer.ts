import { combineReducers } from "redux";
import products from "./productsReducer";
import product from "./productReducer";
import getByAlias from "./findByAliasSlice";
import cart from "./cartReducer";

export const rootReducer = combineReducers({
  products,
  product,
  getByAlias,
  cart,
});
