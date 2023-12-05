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
      console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    },
  },
});

// console.log(cartSlice);

/* No Manual process of creating Action String, Action Variable, 
  Setup of Action Creator, we directly get Action Creator with 
  Redux ToolKit */

const { clearCart, removeItem } = cartSlice.actions;

export { clearCart, removeItem };

export default cartSlice.reducer;
