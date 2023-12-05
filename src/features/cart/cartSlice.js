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
      state.cartItems = [];
    },
  },
});

// console.log(cartSlice);

/* No Manual process of creating Action String, Action Variable, 
  Setup of Action Creator, we directly get Action Creator with 
  Redux ToolKit */

const { clearCart } = cartSlice.actions;

export { clearCart };

export default cartSlice.reducer;
