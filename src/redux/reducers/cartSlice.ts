/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import getProducts from "../../utils/getProducts";
import { Product } from "../../utils/types";
import { useAppSelector } from "../hooks";

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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const newCart = [...state.cart];
      console.log(state.cart);

      state.cart = newCart;
      const indexes = state.cart.map((a) => a.product_id);

      const actualIndex = indexes.indexOf(action.payload.id);

      if (actualIndex === -1) {
        newCart.push({
          product: action.payload,
          product_id: action.payload.id,
          count: 1,
          img: action.payload.image,
          alias: action.payload.name_ru,
        });

        state.cart = newCart;
      } else {
        const index = action.payload.id;
        const arrOfIndex = newCart.map((a) => a.product_id);
        const actualIndex = arrOfIndex.indexOf(index);
        let currentProduct = current(newCart[actualIndex]);
        console.log(arrOfIndex);

        let increment = currentProduct.count + 1;
        state.cart[actualIndex].count = increment;
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const newCart = [...state.cart];
      const index = action.payload;

      newCart[index].count += 1;
      state.cart = newCart;
    },
    decrement: (state, action: PayloadAction<number>) => {
      const newCart = [...state.cart];
      const index = action.payload;
      if (newCart[index].count > 0) {
        newCart[index].count -= 1;
      }

      state.cart = newCart;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
  },
});

export default cartSlice.reducer;

export const { addItem, increment, decrement, removeItem } = cartSlice.actions;
