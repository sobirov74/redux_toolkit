import { rootReducer } from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import apiMiddleware from "./middlewares/apiMiddleware";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "hey",
  storage,
  // whitelist: ["auth", "main"],
};

const pReducer: any = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: pReducer,
  middleware: [thunk, apiMiddleware],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
