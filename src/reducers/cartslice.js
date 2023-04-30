import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const rass = state.cartItems;
      let isPresent = rass.find((uu) => uu.shoe.id == action.payload.shoe.id);
      if (!isPresent) state.cartItems.push(action.payload);
      //if(ff) console.log("thiep"+ JSON.stringify(state.cartItems.map(tt=>tt.id===action.payload.id?{...tt, qty:tt.qty+1}:tt)) )
      if (isPresent)
        state.cartItems = state.cartItems.map((tt) =>
          tt.shoe.id === action.payload.shoe.id ? { ...tt, qty: tt.qty + action.payload.qty } : tt
        );
    },
    decrementcart: (state, action) => {
      if (action.payload.qty > 1)
        state.cartItems = state.cartItems.map((tt) =>
          tt.shoe.id === action.payload.shoe.id ? { ...tt, qty: tt.qty - 1 } : tt
        );

      if (action.payload.qty == 1)
        state.cartItems = state.cartItems.filter(
          (tt) => tt.shoe.id != action.payload.shoe.id
        );
    },
    incrementcart: (state, action) => {
      state.cartItems = state.cartItems.map((tt) =>
        tt.shoe.id === action.payload.shoe.id ? { ...tt, qty: tt.qty + 1 } : tt
      );
    },
    RemoveItemcart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (tt) => tt.shoe.id != action.payload.shoe.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTocart, decrementcart, incrementcart, RemoveItemcart } =
  cartSlice.actions;

export default cartSlice.reducer;
