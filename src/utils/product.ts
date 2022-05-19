import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./url";

const getProduct = createAsyncThunk(
  "fetchProduct/fetchAll",
  async (alias: string | undefined, thunkAPI) => {
    try {
      const resp = await axios.get(`${url}/${alias}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error, product not found");
    }
  }
);

export default getProduct;
