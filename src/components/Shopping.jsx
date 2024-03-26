import Card from './Card';

function Shopping({ items, onClick, error, loading }) {

  if (error) return <div>A network error was encountered</div>;
  if (loading) return <div>Loading...</div>;

  return(
    <div>
      {items.map((item) => (
        <Card item={item} onClick={onClick} key={item.id} ></Card>
      ))}
    </div>
  );
}
  
export default Shopping;
  