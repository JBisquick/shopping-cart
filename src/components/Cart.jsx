import { Link } from 'react-router-dom';
import '../css/cart.css'

function Cart({ cart, onClick, reset }) {
  let total = 0;
  for (const item of cart) {
    total += item.count * item.price;
  }

  return (
    <div className='cart-container'>
      <div className='cart-description'>
        <div>Item</div>
        <div className='prices'>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
      </div>
      {cart.map((item) => (
        <div key={item.id} className='cart-card'>
          <img src={item.image} />
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div>{item.count}</div>
          <div>{item.count * item.price}</div>
          <button
            onClick={() => {
              onClick(item);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {cart.length > 0 ? (
        <div>
          <div>Total: {total}</div>
          <Link to="/order" onClick={reset}>
            Check Out
          </Link>
        </div>
      ) : (
        <div>There is nothing in the cart!</div>
      )}
    </div>
  );
}

export default Cart;
