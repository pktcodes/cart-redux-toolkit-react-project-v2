import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-cart-icon-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*  
============
useSelector
============
- Expects a callback function as parameter
- In callback function, entire application store is provided as parameter
*/

/*  
=========
HeroIcons
=========
import { Trash } from '../icons';

<div style={{ width: '40px', color: 'black' }}>
  <Trash />
</div>
*/
