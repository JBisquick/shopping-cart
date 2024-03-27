import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ items }) {
  return (
    <div>
      <h1>Odin Shopping</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shopping">Shopping</Link>
        <div>
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
