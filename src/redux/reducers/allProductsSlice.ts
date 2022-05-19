import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getProducts from "utils/getProducts";
import { Product } from "utils/types";

type Cart = {
  product: Product;
  id: number;
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

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getProducts.fulfilled.type,
        (state = initialState, action: PayloadAction<Product>) => {
          state.loading = false;
          state.data = action.payload.data;
        }
      )
      .addCase(getProducts.pending.type, (state = initialState) => {
        state.loading = true;
      })
      .addCase(
        getProducts.rejected.type,
        (state = initialState, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

// export const { get } = productReducer.actions;

export default productReducer.reducer;
