import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch/fetchSlice", async () => {
  return fetch("https://gitconnected.com/v1/portfolio/kapil959")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
});
