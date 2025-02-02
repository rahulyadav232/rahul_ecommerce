import { configureStore, combineReducers } from "@reduxjs/toolkit";
import HomeReducer from "./feature/home/homeSlice";
import CartReducer from "./feature/cart/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["home"], // If You don't want to persist state of any reducer then just put it in blacklist array
  whitelist: ["cart"], // If You want to persist state of any reducer then just put it in whitelist array
};

const rootReducers = combineReducers({
  home: HomeReducer,
  cart: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // Disable devTools in Production
  middleware: [thunk],
});

export const persistor = persistStore(Store);
