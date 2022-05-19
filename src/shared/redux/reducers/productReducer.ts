import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { StatusEnum } from "../types";

const initialState = {
  status: StatusEnum.START,
  product: {},
  error: "",
};
export const slicer = createSlice({
  name: "product",
  initialState,
  reducers: {
    start: (state) => {
      state.status = StatusEnum.LOADING;
      state.error = "";
    },
    success: (state, { payload }) => {
      state.status = StatusEnum.SUCCESS;
      state.product = payload.data;
      console.log(payload);
    },
    error: (state, { payload }) => {
      state.status = StatusEnum.ERROR;
      state.error = payload;
    },
  },
});

export const productSelector = (state: RootState) => state.cart;
export default slicer.reducer;
export const { start, success, error } = slicer.actions;
