import { products } from "../../api/productsApi";
import { start, success, error } from "../reducers/productsReducer";
import { handleApi } from "../../utils/apiHandler";

export const cartAction =
  (payload = {}, callBack?: (status?: boolean) => void) =>
  (dispatch: any): any => {
    handleApi(
      dispatch(
        {
          api: products,
          types: [start, success, error],
          query: {},
        },
        callBack
      )
    );
  };
