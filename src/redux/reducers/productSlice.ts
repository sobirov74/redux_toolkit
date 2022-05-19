import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getProduct from "utils/product";
import { Product } from "utils/types";

export type Cart = {
  product: Product;
  product_id: number;
  img: string[];
  alias: string;
};

type cartState = {
  product: Cart[];
  error: string;
  loading: boolean;
  id: number;
  alias: string;
  img: string[];
};

const initialState: cartState = {
  product: [],
  error: "",
  loading: false,
  id: 0,
  alias: "",
  img: [],
};

const fetchProduct = createSlice({
  name: "fetchProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getProduct.fulfilled.type,
        (state = initialState, action: PayloadAction<Product>) => {
          state.loading = false;
          const newCart = [...state.product];
          newCart.push({
            product: action.payload.data,
            product_id: action.payload.data.id,
            img: action.payload.data.image,
            alias: action.payload.data.name_ru,
          });
          state.product = newCart;
        }
      )
      .addCase(getProduct.pending.type, (state = initialState) => {
        state.loading = true;
      })
      .addCase(
        getProduct.rejected.type,
        (state = initialState, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

// export const { getAlias } = fetchProduct.actions;

export default fetchProduct.reducer;
