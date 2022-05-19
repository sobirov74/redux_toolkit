import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "utils/types";

type cartState = {
  item: Cart[];
  error: string;
  loading: boolean;
  id: number;
  alias: string;
  // products?: [];
  // img: string[];
};

const initialState: cartState = {
  item: [],
  error: "",
  loading: false,
  id: 0,
  alias: "",
  // img: [],
};

const getProductId = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductByAlias: (state, action: PayloadAction<Product>) => {
      const newCart = state.item;
      console.log(action.payload);

      newCart.push({
        product: action.payload,
        id: action.payload.id,
        image: action.payload.image,
        alias: action.payload.name_ru,
        count: 0,
      });
      state.item = newCart;

      //   const indexes = state.cart.map((a) => a.id);
      //   const actualIndex = indexes.indexOf(action.payload.id);
    },
    getAlias: (state, action: PayloadAction<string>) => {
      state.alias = action.payload;
    },
  },
});

export const { getAlias, getProductByAlias } = getProductId.actions;

export default getProductId.reducer;
