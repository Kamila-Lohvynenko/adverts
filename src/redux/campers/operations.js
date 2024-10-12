import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { removeNulls } from "../../utils/removeNullFromObj";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (param, thunkAPI) => {
    const existingParams = removeNulls(param);

    const queryString = Object.keys(existingParams).reduce((acc, key) => {
      const value = encodeURIComponent(existingParams[key]);
      return acc
        ? `${acc}&${encodeURIComponent(key)}=${value}`
        : `${encodeURIComponent(key)}=${value}`;
    }, "");

    try {
      const response = await axios.get(`/campers?${queryString}&limit=5`);
      return response.data;
    } catch (error) {
      const { status, message } = error;

      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchOne",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      const { status, message } = error;

      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);
