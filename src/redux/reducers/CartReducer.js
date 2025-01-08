import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    subtotal: 0,
    total: 0,
    promoDiscount: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.some((item) => item.id === action.payload.id);

      if (!exists) {
        state.cart.push(action.payload);
        state.subtotal += Number(action.payload.price);
      }
    },
    // removeItem: (state, action) => {
    //   const itemToRemove = state.cart.find(
    //     (course) => course?.id === action.payload
    //   );

    //   if (itemToRemove) {
    //     state.subtotal -= Number(itemToRemove.price);

    //     state.cart = state.cart.filter(
    //       (course) => course?.id !== action.payload
    //     );
    //   }
    //   if (state.cart.length == 0) {
    //     state.promoDiscount = {};
    //   }
    //   if(state.subtotal < state.promoDiscount?.discount){

    //   }
    // },
    removeItem: (state, action) => {
      const itemToRemove = state.cart.find(
        (course) => course?.id === action.payload
      );

      if (itemToRemove) {
        state.subtotal -= Number(itemToRemove.price);

        // Prevent subtotal from going negative
        if (state.subtotal < 0) {
          state.subtotal = 0;
        }

        state.cart = state.cart.filter(
          (course) => course?.id !== action.payload
        );
      }

      // Reset promoDiscount if the cart becomes empty
      if (state.cart.length === 0) {
        state.promoDiscount = {};
      }

      // If the subtotal is less than the promoDiscount, recalculate the total
      if (state.subtotal < state.promoDiscount?.discount) {
        let recalculatedSubtotal = 0;
        state.promoDiscount = {};
        // Iterate through the remaining cart items to recalculate the subtotal
        state.cart.forEach((course) => {
          recalculatedSubtotal += Number(course.price);
        });

        state.subtotal = recalculatedSubtotal;

        // Prevent recalculatedSubtotal from going negative
        if (state.subtotal < 0) {
          state.subtotal = 0;
        }

        // Adjust the total by considering the promoDiscount
        const discount = Math.min(
          state.promoDiscount?.discount,
          recalculatedSubtotal
        );
        state.total = recalculatedSubtotal - discount;
      } else {
        // Regular calculation of total
        const discount = Math.min(
          state.promoDiscount?.discount || 0,
          state.subtotal
        );
        state.total = state.subtotal - discount;
      }

      // Ensure total doesn't go negative
      if (state.total < 0) {
        state.total = 0;
      }
    },

    setDiscount: (state, action) => {
      state.promoDiscount = action.payload;
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.subtotal = 0;
      state.total = 0;
      state.promoDiscount = {};
    },
  },
});

export default CartReducer.reducer;
export const { addToCart, removeItem, clearCart, setDiscount } =
  CartReducer.actions;
