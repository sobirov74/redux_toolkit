import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import getProduct from "../../utils/product";
// import Product from "../../pages/product/[id]";
import { Product } from "../../utils/types";
import { useAppDispatch } from "../hooks";

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
};

const initialState: cartState = {
  item: [],
  error: "",
  loading: false,
  id: 0,
  alias: "",
};

const getProductId = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getProductById: (state, action: PayloadAction<Product>) => {
    //   const newCart = [...state.product];
    //   console.log(action.payload);

    //   newCart.push({
    //     product: action.payload,
    //     product_id: action.payload.id,
    //     img: action.payload.image,
    //     alias: action.payload.name_ru,
    //   });
    //   state.product = newCart;
    //   console.log(newCart);

    //   //   const indexes = state.cart.map((a) => a.product_id);
    //   //   const actualIndex = indexes.indexOf(action.payload.id);
    // },
    getAlias: (state, action: PayloadAction<string>) => {
      const alias = action.payload;
      state.alias = action.payload;
    },

    // pushElement: (state, action: PayloadAction<string>) => {

    // },
  },
  extraReducers: {
    [getProduct.fulfilled.type]: (state, action: PayloadAction<Product>) => {
      state.loading = false;
      const newCart = [...state.item];

      newCart.push({
        product: action.payload.data,
        product_id: action.payload.data.id,
        img: action.payload.data.image,
        alias: action.payload.data.name_ru,
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

export const { getAlias } = getProductId.actions;

export default getProductId.reducer;
