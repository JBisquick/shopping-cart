import { useState } from 'react';
import '../css/card.css'

function Card({ item, onClick }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='card-container'>
      <h4>{item.category}</h4>
      <img src={item.image} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div>${item.price}</div>
      <div>
        <input
          type="number"
          value={quantity}
          min='1'
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          id={item.title}
        />
        <button
          onClick={() => {
            onClick(item, Number(quantity));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
