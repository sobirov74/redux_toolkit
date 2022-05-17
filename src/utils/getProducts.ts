import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./types";
import { url } from "./url";

const getProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get<Product[]>(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error, cant get products");
    }
  }
);

export default getProducts;
