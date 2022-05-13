/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./../utils/types";
import { getProduct } from "./../utils/product";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./hooks";
import { act } from "react-dom/test-utils";

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
  count: number;
  error: string;
  loading: boolean;
  data: Product[];
  id: number;
};

const initialState: cartState = {
  cart: [],
  count: 1,
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
        const newCart = [state.cart];
        const index = action.payload.id;

        // newCart[index].count += 1;
        // state.cart = newCart;
        const arrOfIndex = newCart[0].map((a) => a.product_id);
        console.log(arrOfIndex);
        const actualIndex = arrOfIndex.indexOf(index);

        console.log(arrOfIndex.indexOf(index));

        // console.log(newCart.map((a) => a.product_id));
        // const productId = newCart.map((a) => a.product_id);

        // newCart[0].indexOf(index);
        const increment = newCart[0].map((a) => a.count + 1);

        console.log(newCart[0].map((a) => a));
      }

      // const checker = checkItem(product).find((item, index) => {
      //   if (product.id === item.id) {
      //     actualIndex = index;
      //     return true;
      //   }
      //   return false;
      // });
      // if (checker) {
      //   newCart.push({
      //     product: action.payload,
      //     product_id: action.payload.id,
      //     count: 1,
      //     img: action.payload.image,
      //     alias: action.payload.alias,
      //   });

      //   state.cart = newCart;
      // }
      // else {
      //   // const dispatch = useAppDispatch();
      //   // dispatch(increment(action.payload.count));
      //   console.log(checker);

      //   console.log("kldkasjdlsajkh");
      // }
      // state.cart.map((item) => console.log(item.product_id));
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

      newCart[index].count -= 1;
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
