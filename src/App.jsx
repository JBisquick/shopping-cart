import { useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cart from './components/Cart';
import Shopping from './components/Shopping';

function App() {
  const { name } = useParams();

  return (
    <div>
      <Navigation></Navigation>
      {name === 'shopping' ? (
        <Shopping></Shopping>
      ) : name === 'cart' ? (
        <Cart></Cart>
      ) : (
        <Home></Home>
      )}
    </div>
  );
}

export default App;
