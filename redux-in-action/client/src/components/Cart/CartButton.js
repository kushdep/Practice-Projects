import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuant = useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch()

  function handleCartClick() {
    dispatch(uiActions.showCart())
  }


  return (
    <button className={classes.button} onClick={handleCartClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuant}</span>
    </button>
  );
};

export default CartButton;
