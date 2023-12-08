import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems, isLoading, isError } = useSelector((state) => state.cart);

  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems('hello world'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="loading">
        <h1>Oops, something went wrong!</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
      {isOpen && <Modal />}
    </main>
  );
}

export default App;
