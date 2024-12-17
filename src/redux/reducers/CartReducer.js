import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    subtotal: 0,
    total: 0,
    promoDiscount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.some((item) => item.id === action.payload.id);

      if (!exists) {
        state.cart.push(action.payload);
        state.subtotal += Number(action.payload.price);
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = state.cart.find(
        (course) => course?.id === action.payload
      );

      if (itemToRemove) {
        state.subtotal -= Number(itemToRemove.price);

        state.cart = state.cart.filter(
          (course) => course?.id !== action.payload
        );
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.subtotal = 0;
      state.total = 0;
      state.promoDiscount = 0;
    },
  },
});

export default CartReducer.reducer;
export const { addToCart, removeItem, clearCart } = CartReducer.actions;
