import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./types";
const url = "https://admin.ilenmed.uz/api/products";

// export const getProduct = () => async (dispatch: AppDispatch) => {
//   try {
//     const resp = await axios.get<Product>(
//       "https://admin.ilenmed.uz/api/products"
//     );

//     dispatch(addItem(resp.data));
//   } catch (error) {
//     console.log("error, cant get produsts");
//   }
// };

export const getProduct = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get<Product[]>(url);

      // dispatch(addItem(resp.data));
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error, cant get products");
    }
  }
);
