import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    chosenItem: null,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload.items;
        //   console.log(payload.items);
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.chosenItem = payload;
      }),
});

export const campersReducer = campersSlice.reducer;
