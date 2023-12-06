import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

// import { useEffect } from 'react';
// import { calculateTotals } from '../features/cart/cartSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  /* 
  ==================================
  ALTERNATIVE - For Totals in App.js
  ==================================
    useEffect(() => {
      dispatch(calculateTotals({ amount, total }));
    }, [cartItems]);
  */

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <h4 className="empty-cart">is currently empty</h4>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      {/* Cart Items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        {/* Total */}
        <div className="cart-total">
          <h4>
            total
            <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        {/* Button */}
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
