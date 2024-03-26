function Card( { item, onClick } ) {
  return(
    <div>
      <h4>{item.category}</h4>
      <img src={item.image} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div>{item.price}</div>
      <div>
        <input type="number" />
        <button onClick={onClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;