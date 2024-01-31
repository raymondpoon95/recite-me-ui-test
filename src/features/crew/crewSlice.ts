import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CrewProps } from "../../types/types";

const BASE_URL = import.meta.env.VITE_APP_BASE_API_URL;

interface FetchCrewListDataArgs {
  page?: number;
  search?: string;
}

interface CrewState {
  loading: boolean;
  crew: CrewProps[];
  errorMessage: string;
}

const initialState: CrewState = {
  loading: false,
  crew: [],
  errorMessage: "",
};

const crewSlice = createSlice({
  name: "crew",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrewListData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCrewListData.fulfilled, (state, action) => {
        state.loading = false;
        state.errorMessage = "";
        state.crew = action.payload.docs;
      })
      .addCase(fetchCrewListData.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message as string;
      });
  },
});

export const fetchCrewListData = createAsyncThunk(
  "crew/fetchCrewListData",
  async ({ page = 1, search }: FetchCrewListDataArgs) => {
    try {
      let params = {
        query: {},
        options: {},
      };

      if (page) {
        params = {
          ...params,
          options: {
            page,
          },
        };
      }

      if (search) {
        params = {
          ...params,
          query: {
            $text: {
              $search: search,
            },
          },
        };
      }

      const response = await axios.post(`${BASE_URL}/crew/query`, params);
      if (response) return response.data;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  }
);

export const {} = crewSlice.actions;

export default crewSlice;
