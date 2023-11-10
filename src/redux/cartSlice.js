import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    
    removeCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    
    clearCart: (state) => {
      return state = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
