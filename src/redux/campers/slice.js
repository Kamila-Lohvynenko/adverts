import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    chosenItem: null,
    total: null,
    error: null,
  },
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.chosenItem = payload;
      }),
});

export const campersReducer = campersSlice.reducer;
export const { resetItems } = campersSlice.actions;
