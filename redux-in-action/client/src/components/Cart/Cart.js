import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)
  console.log(cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(e => <CartItem item={{ id : e.id,title: e.title, quantity: e.quantity, total: e.total, price: e.price }} />)}
      </ul>
    </Card>
  );
};

export default Cart;
