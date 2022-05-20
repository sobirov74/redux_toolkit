import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product } from "utils/types";
import { RootState } from "../rootConfig";

type cartState = {
  cart: Cart[];
  error: string;
  loading: boolean;
  data: Product[];
  id: number;
  status?: string;
  products?: [];
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

      state.cart = newCart;
      const indexes = state.cart.map((a) => a.id);
      console.log(indexes);

      const actualIndex = indexes.indexOf(action.payload.id);

      if (actualIndex === -1) {
        newCart.push({
          product: action.payload,
          id: action.payload.id,
          count: 1,
          image: action.payload.image,
          alias: action.payload.name_ru,
        });

        state.cart = newCart;
      } else {
        const index = action.payload.id;
        const arrOfIndex = newCart.map((a) => a.id);
        const actualIndex = arrOfIndex.indexOf(index);
        let currentProduct = current(newCart[actualIndex]);

        let increment: number = currentProduct.count + 1;
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
export const cartSelector = (state: RootState) => state.cart;
export const { addItem, increment, decrement, removeItem } = cartSlice.actions;
