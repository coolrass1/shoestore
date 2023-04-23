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
      let isPresent = rass.find((uu) => uu.id == action.payload.id);
      if (!isPresent) state.cartItems.push(action.payload);
      //if(ff) console.log("thiep"+ JSON.stringify(state.cartItems.map(tt=>tt.id===action.payload.id?{...tt, qty:tt.qty+1}:tt)) )
      if (isPresent)
        state.cartItems = state.cartItems.map((tt) =>
          tt.id === action.payload.id ? { ...tt, qty: tt.qty + 1 } : tt
        );
    },
    decrementcart: (state, action) => {
      if (action.payload.qty > 1)
        state.cartItems = state.cartItems.map((tt) =>
          tt.id === action.payload.id ? { ...tt, qty: tt.qty - 1 } : tt
        );

      if (action.payload.qty == 1)
        state.cartItems = state.cartItems.filter(
          (tt) => tt.id != action.payload.id
        );
    },
    incrementcart: (state, action) => {
      state.cartItems = state.cartItems.map((tt) =>
        tt.id === action.payload.id ? { ...tt, qty: tt.qty + 1 } : tt
      );
    },
    RemoveItemcart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (tt) => tt.id != action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTocart, decrementcart, incrementcart, RemoveItemcart } =
  cartSlice.actions;

export default cartSlice.reducer;
