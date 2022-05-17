import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getProduct from "../../utils/product";
import { Product } from "../../utils/types";

export type Cart = {
  product: Product;
  product_id: number;
};

type cartState = {
  item: Cart[];
  error: string;
  loading: boolean;
  id: number;
  alias: string;
  img: string[];
};

const initialState: cartState = {
  item: [],
  error: "",
  loading: false,
  id: 0,
  alias: "",
  img: [],
};

const fetchProduct = createSlice({
  name: "fetchProduct",
  initialState,
  reducers: {
    [getProduct.fulfilled.type]: (state, action: PayloadAction<Product>) => {
      state.loading = false;
      const newCart = [...state.item];
      console.log(action.payload);

      newCart.push({
        product: action.payload.data,
        product_id: action.payload.data.id,
      });
      state.item = newCart;
    },
    [getProduct.pending.type]: (state: cartState) => {
      state.loading = true;
    },
    [getProduct.rejected.type]: (
      state: cartState,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getAlias } = fetchProduct.actions;

export default fetchProduct.reducer;
