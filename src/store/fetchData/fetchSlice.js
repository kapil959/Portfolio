import { createSlice } from "@reduxjs/toolkit";
import { fetchData as fetchDataAction } from "./thunk";
export const fetchData = fetchDataAction;

const fetchSlice = createSlice({
  name: "fetchSlice",
  initialState: {
    data: {},
    isApiLoaded: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataAction.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload;
      state.isApiLoaded = true;
    });
  },
});
export const getUsersData = (state) => state.fetchSlice.data;
export const getApiLoaded = (state) => state.fetchSlice.isApiLoaded;

export default fetchSlice.reducer;
