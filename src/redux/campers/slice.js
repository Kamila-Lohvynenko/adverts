import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: (builder) =>
    builder.addCase(fetchCampers.fulfilled, (state, { payload }) => {
      state.items = payload.items;
      //   console.log(payload.items);
    }),
});

export const campersReducer = campersSlice.reducer;
