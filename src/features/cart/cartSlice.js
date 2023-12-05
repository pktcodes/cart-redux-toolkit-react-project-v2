import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      // Can Mutate State since Immer from Redux Toolkit handles the process in background
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    },
    increaseItemAmount: (state, action) => {
      const itemId = action.payload.id;
      const selectedCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      selectedCartItem.amount = selectedCartItem.amount + 1;
    },
    decreaseItemAmount: (state, action) => {
      const itemId = action.payload.id;
      const selectedCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      selectedCartItem.amount = selectedCartItem.amount - 1;
    },
  },
});

// console.log(cartSlice);

/* No Manual process of creating Action String, Action Variable, 
  Setup of Action Creator, we directly get Action Creator with 
  Redux ToolKit */

const { clearCart, removeItem, increaseItemAmount, decreaseItemAmount } =
  cartSlice.actions;

export { clearCart, removeItem, increaseItemAmount, decreaseItemAmount };

export default cartSlice.reducer;
