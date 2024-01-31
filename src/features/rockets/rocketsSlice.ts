import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RocketType } from "../../types/types";

const BASE_URL = import.meta.env.VITE_APP_BASE_API_URL;

export interface RocketState {
  loading: boolean;
  rockets: RocketType[];
  errorMessage: string;
}

const initialState: RocketState = {
  loading: false,
  rockets: [],
  errorMessage: "",
};

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketListData.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(fetchRocketListData.fulfilled, (state, action) => {
        state.loading = false;
        state.errorMessage = "";
        state.rockets = action.payload;
      })
      .addCase(fetchRocketListData.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message as string;
      });
  },
});

export const fetchRocketListData = createAsyncThunk(
  "rocket/fetchRocketListData",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/rockets`);
      if (response) return response.data;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  }
);

export const {} = rocketsSlice.actions;

export default rocketsSlice;
