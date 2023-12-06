import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
