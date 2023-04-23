import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8080/api/v1/shoe/list";
const initialState = {
  entities: [],
  loading: false,
  error: null,
};

export const getShoes = createAsyncThunk(
  "shoes/getShoes",

  async () => {
    const { data } = await axios.get(url);

    return data;
  }
);
export const shoeSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {},
  extraReducers: {
    [getShoes.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.entities = action.payload;
    },
  },
});

export const shoeReducer = shoeSlice.reducer;
