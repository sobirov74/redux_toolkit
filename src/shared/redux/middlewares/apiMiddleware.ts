/* eslint-disable no-throw-literal */
import { AnyAction, MiddlewareAPI } from "redux";

const apiMiddleware =
  ({ dispatch, getState }: MiddlewareAPI) =>
  (next: any) =>
  (action: AnyAction) => {
    if (!action.api || !action.types) {
      return next(action);
    }
    const {
      api,
      types: [START, SUCCESS, ERROR],
      query,
    } = action;

    if (START)
      dispatch(
        START({
          query,
        })
      );
    // const {token} = getState().auth;
    return api({ query })
      .then((response: any) => {
        if (response && response.data && response.status === 200) {
          if (SUCCESS) dispatch(SUCCESS(response.data));
          return {
            payload: response.data,
            query,
            responseStatus: response.status,
          };
        } else if (response.data.statusCode === 401) {
          // dispatch(deleteToken()); reset auth
          throw { response };
        } else {
          throw (
            (response && response.data && { response }) || {
              response: { data: { message: "Что-то не так!" } },
            }
          );
        }
      })
      .catch((error: any) => {
        error.requestData = query;
        if (ERROR)
          dispatch(
            ERROR({
              error,
              query,
            })
          );
        if (error.response && error.response.status === 401) {
          // dispatch(deleteToken()); reset auth
        }
        throw error;
      });
  };

export default apiMiddleware;
