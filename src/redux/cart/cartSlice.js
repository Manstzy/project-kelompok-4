import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsCart: (state, action) => {
      const newItem = action.payload;
      const selectIndexItem = state.items.findIndex(
        (items) => items.id == newItem.id
      );
      if (selectIndexItem !== -1) {
        state.items[selectIndexItem].quantity += 1;
        state.items[selectIndexItem].totalPrice =
          state.items[selectIndexItem].quantity * newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeCart: (state, action) => {
      const targetId = action.payload.id;
      const selectCartIndex = state.items.findIndex(
        (product) => product.id === targetId
      );
      if (selectCartIndex !== -1) {
        if (state.items[selectCartIndex].quantity > 1) {
          state.items[selectCartIndex].quantity -= 1;
          state.items[selectCartIndex].totalPrice =
            state.items[selectCartIndex].quantity * action.payload.price;
          state.items[selectCartIndex].point =
            state.items[selectCartIndex].quantity * action.payload.id;
        } else {
          state.items = state.items.filter((item) => item.id !== targetId);
        }
      }
    },
  },
});

export const { addItemsCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectItems = (state) => state.cart.items;
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, items) => total + items.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, items) => total + items.totalPrice, 0);
