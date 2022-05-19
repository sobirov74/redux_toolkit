import { product } from "../../api/productsApi";
import { start, success, error } from "../reducers/cartReducer";
import { handleApi } from "../../utils/apiHandler";

export const productAction =
  (payload: string, callBack?: (status?: boolean) => void) =>
  (dispatch: any): any => {
    // const { alias } = payload;
    console.log(payload);
    handleApi(
      dispatch(
        {
          api: product(payload),
          types: [start, success, error],
        },
        callBack
      )
    );
  };
