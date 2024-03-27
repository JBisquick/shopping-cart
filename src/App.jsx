import { useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Cart from './components/Cart';
import Shopping from './components/Shopping';
import useItems from './hooks/useItems';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [numberItems, setNumberItems] = useState(0);
  const { name } = useParams();
  const { items, error, loading } = useItems();

  function checkItem(item) {
    for (const cartItem of cartItems) {
      if (cartItem.id === item.id) {
        return true;
      }
    }
    return false;
  }

  function addItem(item, number) {
    if (checkItem(item) === false) {
      item.count = number;
      setCartItems(cartItems.concat([item]));
      countItems(cartItems.concat([item]));
    } else {
      let i = 0;
      for (const cartItem of cartItems) {
        if (cartItem.id === item.id) {
          let allItems = cartItems.slice();
          allItems[i].count += number;
          setCartItems(allItems);
          countItems(allItems);
        }
        i += 0;
      }
    }
  }

  function countItems(items) {
    let count = 0;
    for (const item of items) {
      count += item.count;
    }
    setNumberItems(count);
  }

  return (
    <div>
      <Navigation items={numberItems} ></Navigation>
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
