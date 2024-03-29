import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/navigation.css'

function Navigation({ items }) {
  return (
    <div className="nav-container">
      <h1 className='title'>Odin Shopping</h1>
      <div className='link-container'>
        <Link to="/">Home</Link>
        <Link to="/shopping">Shopping</Link>
        <div className='cart-link'>
          <Link to="/cart">Cart</Link>
          <div>{items}</div>
        </div>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  items: PropTypes.number
};

Navigation.defaultProps = {
  items: 0
};

export default Navigation;
