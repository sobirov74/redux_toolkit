import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./types";
import { url } from "./url";
import { useAppDispatch } from "./../redux/hooks";
import { get } from "../redux/reducers/cartReducer";

const getProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get<Product>(url);
      const dispatch = useAppDispatch();
      console.log(resp.data);
      dispatch(get(resp.data));

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error, cant get products");
    }
  }
);

export default getProducts;
