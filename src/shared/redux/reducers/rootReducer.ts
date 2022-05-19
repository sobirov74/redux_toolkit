import { combineReducers } from "redux";
import cart from "./cartReducer";
import product from "./productReducer";

export const rootReducer = combineReducers({
  cart,
  product,
});
