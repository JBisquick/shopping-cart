import { useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cart from './components/Cart';
import Shopping from './components/Shopping';
import useItems from './hooks/useItems';

function App() {
  const { name } = useParams();
  const { items, error, loading } = useItems();

  return (
    <div>
      <Navigation></Navigation>
      {name === 'shopping' ? (
        <Shopping items={items} onClick={addItem} error={error} loading={loading} ></Shopping>
      ) : name === 'cart' ? (
        <Cart></Cart>
      ) : (
        <Home></Home>
      )}
    </div>
  );
}

export default App;
