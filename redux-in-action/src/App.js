import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import uiSlice from './store/ui-slice';


function App() {
  const cartVisibilityState = useSelector(state => state.ui.isCartVisible)

  return (
    <Layout>
      {cartVisibilityState && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
