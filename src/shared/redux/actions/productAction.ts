import { product } from "../../api/productsApi";
import { start, success, error } from "../reducers/productReducer";
import { handleApi } from "../../utils/apiHandler";

export const productAction =
  (query: string, callBack?: (status?: boolean) => void) =>
  (dispatch: any): any => {
    handleApi(
      dispatch(
        {
          api: product,
          types: [start, success, error],
          query,
        },
        callBack
      )
    );
  };
