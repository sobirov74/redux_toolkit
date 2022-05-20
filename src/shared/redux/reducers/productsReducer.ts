import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootConfig";
import { StatusEnum } from "../types";

const initialState = {
  status: StatusEnum.START,
  products: {},
  error: "",
};
export const slicer = createSlice({
  name: "products",
  initialState,
  reducers: {
    start: (state) => {
      state.status = StatusEnum.LOADING;
      state.error = "";
    },
    success: (state, { payload }) => {
      state.status = StatusEnum.SUCCESS;
      state.products = payload.data;
      // console.log(payload.data);
    },
    error: (state, { payload }) => {
      state.status = StatusEnum.ERROR;
      state.error = payload;
    },
  },
});

export const productsSelector = (state: RootState) => state.cart;
export default slicer.reducer;
export const { start, success, error } = slicer.actions;
