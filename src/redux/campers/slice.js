import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";

const handlePending = (state) => {
  state.error = false;
  state.notFound = false;
  state.loading = true;
};
const handleRejected = (state, { payload }) => {
  console.log(payload);
  if (payload.status === 404) {
    state.notFound = true;
    state.loading = false;
  } else {
    state.error = true;
    state.loading = false;
  }
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    chosenItem: null,
    total: null,
    error: null,
    loading: false,
    notFound: false,
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
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.chosenItem = payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.rejected, handleRejected),
});

export const campersReducer = campersSlice.reducer;
export const { resetItems } = campersSlice.actions;
