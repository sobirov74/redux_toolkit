import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./url";

// const url1 = `https://admin.ilenmed.uz/api/products/${id}`;

// export const getProducts = () => async (dispatch: AppDispatch) => {
//   try {
//     const resp = await axios.get<Product>(
//       "https://admin.ilenmed.uz/api/products"
//     );

//     dispatch(addItem(resp.data));
//   } catch (error) {
//     console.log("error, cant get produsts");
//   }
// };

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
