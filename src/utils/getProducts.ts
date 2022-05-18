import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./types";
import { url } from "./url";

const getProducts = createAsyncThunk("products/fetchAll", async () => {
  const resp = await axios.get<Product[]>(url);
  return resp.data;
});

export default getProducts;
