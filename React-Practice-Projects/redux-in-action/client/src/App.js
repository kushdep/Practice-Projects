import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { getCartData, sendCartData } from './store/cart-actions';

let isInitial = true

function App() {
  const cartVisibilityState = useSelector(state => state.ui.isCartVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])


  return (
    <Layout>
      {notification && <Notification title={notification?.title} status={notification?.status} message={notification?.message} />}
      {cartVisibilityState && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
