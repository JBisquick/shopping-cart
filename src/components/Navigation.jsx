import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <h1>Odin Shopping</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Navigation;
