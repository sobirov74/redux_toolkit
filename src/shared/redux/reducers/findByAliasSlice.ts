import { createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "shared/redux/rootConfig";
import { Cart } from "utils/types";

type cartState = {
  item: Cart[];
  error: string;
  loading: boolean;
  id: number;
  alias: string;
};

const initialState: cartState = {
  item: [],
  error: "",
  loading: false,
  id: 0,
  alias: "",
};

const getProductId = createSlice({
  name: "getByAlias",
  initialState,
  reducers: {
    getProductByAlias: (state, { payload }) => {
      const newElement = state.item;

      const indexes = state.item.map((a) => a.id);

      const actualIndex = indexes.indexOf(payload.id);

      if (actualIndex === -1) {
        newElement.push({
          product: payload,
          id: payload.id,
          image: payload.image,
          alias: payload.name_ru,
          count: 0,
        });
      }

      state.item = newElement;
    },
  },
});

export const { getProductByAlias } = getProductId.actions;
export const aliasSelector = (state: RootState) => state.getByAlias;

export default getProductId.reducer;
