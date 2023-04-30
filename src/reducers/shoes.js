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
     
      // const rass={   shoe:{id:cc.id,shoename:cc.shoename,description:cc.description, imageUrl:cc.imageUrl},
      //   qty:cc.qty,
      //   price:cc.price}
        const rock= action.payload.map(cc=>({   shoe:{id:cc.id,shoename:cc.shoename,description:cc.description, imageUrl:cc.imageUrl},
          qty:0,
          price:cc.price}))
          console.log(rock)
      state.entities = rock;
    },
  },
});

export const shoeReducer = shoeSlice.reducer;
