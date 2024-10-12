import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const handlePending = (state) => {
  state.error = false;
  state.loading = true;
};
const handleRejected = (state) => {
  state.error = true;
  state.loading = false;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    chosenItem: null,
    total: null,
    error: null,
    loading: false,
  },
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.items];
        state.total = payload.total;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.chosenItem = payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected),
});

export const campersReducer = campersSlice.reducer;
export const { resetItems } = campersSlice.actions;
