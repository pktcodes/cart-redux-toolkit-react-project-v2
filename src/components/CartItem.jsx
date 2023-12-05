import PropTypes from 'prop-types';
import { ChevronUp, ChevronDown } from '../icons';

const CartItem = ({ img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  amount: PropTypes.number,
};

export default CartItem;
