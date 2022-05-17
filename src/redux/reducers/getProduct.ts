import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../utils/types";

export type Cart = {
  product: Product;
  product_id: number;
  img: string[];
  alias: string;
};

type cartState = {
  item: Cart[];
  error: string;
  loading: boolean;
  id: number;
  alias: string;
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
      const newCart = [...state.item];
      // console.log(action.payload);

      newCart.push({
        product: action.payload,
        product_id: action.payload.id,
        img: action.payload.image,
        alias: action.payload.name_ru,
      });
      state.item = newCart;
      console.log(newCart);

      //   const indexes = state.cart.map((a) => a.product_id);
      //   const actualIndex = indexes.indexOf(action.payload.id);
    },
    getAlias: (state, action: PayloadAction<string>) => {
      state.alias = action.payload;
    },
  },
});

export const { getAlias, getProductByAlias } = getProductId.actions;

export default getProductId.reducer;
