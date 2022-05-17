import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import getProducts from "../../utils/getProducts";
import { useAppDispatch } from "./../hooks";
import { Product } from "./../../utils/types";

export type Cart = {
  product: Product;
  product_id: number;
  count: number;
  img: string[];
  alias: string;
};

type cartState = {
  cart: Cart[];
  error: string;
  loading: boolean;
  data: Product[];
  id: number;
};

const initialState: cartState = {
  cart: [],
  error: "",
  loading: false,
  data: [],
  id: 0,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<Product>) => {
      console.log(action.payload);
      console.log(state);
    },
    [getProducts.fulfilled.type]: (state, action: PayloadAction<Product>) => {
      state.loading = false;
      state.data = action.payload.data;
      // const dispatch = useAppDispatch()
      // dispatch()
      console.log(action.payload);

      console.log(state.data);
    },
    [getProducts.pending.type]: (state: cartState) => {
      state.loading = true;
    },
    [getProducts.rejected.type]: (
      state: cartState,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { get } = cartReducer.actions;

export default cartReducer.reducer;
