import { Link } from 'react-router-dom';

function Cart({ cart, onClick, reset }) {
  let total = 0;
  for (const item of cart) {
    total += item.count * item.price;
  }

  return (
    <div>
      <div>
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>
      {cart.map((item) => (
        <div key={item.id}>
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
          <div>{total}</div>
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
