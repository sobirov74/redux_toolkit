import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { StatusEnum } from "../types";

const initialState = {
  status: StatusEnum.START,
  products: {},
  error: "",
};
export const slicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    start: (state) => {
      state.status = StatusEnum.LOADING;
      state.error = "";
    },
    success: (state, { payload }) => {
      state.status = StatusEnum.SUCCESS;
      state.products = payload.data;
    },
    error: (state, { payload }) => {
      state.status = StatusEnum.ERROR;
      state.error = payload;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;
export default slicer.reducer;
export const { start, success, error } = slicer.actions;
