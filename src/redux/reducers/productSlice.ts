import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getProduct from "utils/product";
import { Cart, Product } from "utils/types";

type cartState = {
  product: Cart[];
  error: string;
  loading: boolean;
  id: number;
  alias: string;
  image: string[];
  // products: [];
};

const initialState: cartState = {
  product: [],
  error: "",
  loading: false,
  id: 0,
  alias: "",
  image: [],
  // products: [],
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
          // newCart.push({
          //   product: action.payload.data,
          //   id: action.payload.data.id,
          //   image: action.payload.data.image,
          //   alias: action.payload.data.name_ru,
          // });
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
