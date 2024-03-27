import { useState } from "react";

function Card( { item, onClick } ) {
  const [quantity, setQuantity] = useState(1);

  return(
    <div>
      <h4>{item.category}</h4>
      <img src={item.image} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div>{item.price}</div>
      <div>
        <input type="number" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} id={item.title} />
        <button onClick={()=> {onClick(item, Number(quantity))}}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;