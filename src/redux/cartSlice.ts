/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./../utils/types";
import { getProduct } from "./../utils/product";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./hooks";
import { act } from "react-dom/test-utils";
import { useState } from "react";

export type Cart = {
  product: Product;
  product_id: number;
  count: number;
  img: string[];
  alias: string;
};

// [{product, count , product_id}]

type cartState = {
  cart: Cart[];
  // count: number;
  error: string;
  loading: boolean;
  data: Product[];
  id: number;
};

const initialState: cartState = {
  cart: [],
  // count: 1,
  error: "",
  loading: false,
  data: [],
  id: 0,
};

// const checkItem = (checker: Product[] | null) =>
//   checker ? checker : [];

// AddItem add/push newProduct -> products[]
// ChangeCounter increment/decrement find by product_id {count: change}
// RemoveItem findByproductId remove item
// ClearBasket empty products

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const newCart = [...state.cart];

      state.cart = newCart;
      const indexes = state.cart.map((a) => a.product_id);

      const actualIndex = indexes.indexOf(action.payload.id);

      if (actualIndex === -1) {
        newCart.push({
          product: action.payload,
          product_id: action.payload.id,
          count: 1,
          img: action.payload.image,
          alias: action.payload.alias,
        });

        state.cart = newCart;
      } else {
        const index = action.payload.id;
        const arrOfIndex = newCart.map((a) => a.product_id);
        const actualIndex = arrOfIndex.indexOf(index);
        let currentProduct = current(newCart[actualIndex]);

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
      // const index = action.payload;
      state.cart = state.cart.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: {
    [getProduct.fulfilled.type]: (state, action: PayloadAction<Product>) => {
      state.loading = false;
      state.data = action.payload.data;
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

// export const getProductsReducer = createSlice({
//   name: "getProduct",
//   initialState,
//   reducers: {
//     [getProduct.fulfilled.type]: (state, action: PayloadAction<Product>) => {
//       state.loading = false;
//       state.data = action.payload.data;
//       console.log(action.payload.data);
//     },
//     [getProduct.pending.type]: (state: cartState) => {
//       state.loading = true;
//     },
//     [getProduct.rejected.type]: (
//       state: cartState,
//       action: PayloadAction<string>
//     ) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

export const { addItem, increment, decrement, removeItem } = cartSlice.actions;
