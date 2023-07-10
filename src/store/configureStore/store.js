import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { logger } from "redux-logger";
import fetchSlice from "../fetchData/fetchSlice";

const middlewares = [];

const createStore = () => {
  return configureStore({
    reducer: {
      fetchSlice: fetchSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });
};
const store = createStore();

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

export default store;
