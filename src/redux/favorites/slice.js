import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    setFavorite(state, { payload }) {
      console.log(payload);

      const { id } = payload;

      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) state.items.splice(index, 1);
      else state.items.push(payload);
    },
  },
});

const persistConfig = {
  key: "favorites",
  storage,
};

export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
export const { setFavorite } = favoritesSlice.actions;
