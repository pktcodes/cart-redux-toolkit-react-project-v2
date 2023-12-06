import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ChevronUp, ChevronDown } from '../icons';
import {
  decreaseItemAmount,
  increaseItemAmount,
  removeItem,
} from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItemAmount({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={
            amount === 1
              ? () => dispatch(removeItem(id))
              : () => {
                  dispatch(decreaseItemAmount({ id }));
                }
          }
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  amount: PropTypes.number,
};

export default CartItem;
