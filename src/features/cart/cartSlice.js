import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  isLoading: true,
};

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
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
    /* 
    ============
    Using Reduce
    ============
      calculateTotals: (state) => {
        const { total, amount } = state.cartItems.reduce(
          (accumulator, currentItem) => {
            const { amount, price } = currentItem;
            // Amount
            accumulator.amount = accumulator.amount + currentItem.amount;
            // Total
            const itemTotal = amount * price;
            accumulator.total = accumulator.total + itemTotal;
            return accumulator;
          },
          { total: 0, amount: 0 }
        );
        state.amount = amount;
        state.total = total.toFixed(2);
      },
    */
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((cartItem) => {
        totalAmount += cartItem.amount;
        totalPrice += cartItem.amount * cartItem.price;
      });
      state.amount = totalAmount;
      state.total = totalPrice;
    },
  },
});

// console.log(cartSlice);

/* No Manual process of creating Action String, Action Variable, 
  Setup of Action Creator, we directly get Action Creator with 
  Redux ToolKit */

const {
  clearCart,
  removeItem,
  increaseItemAmount,
  decreaseItemAmount,
  calculateTotals,
} = cartSlice.actions;

export {
  clearCart,
  removeItem,
  increaseItemAmount,
  decreaseItemAmount,
  calculateTotals,
};

export default cartSlice.reducer;
