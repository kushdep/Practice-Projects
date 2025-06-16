import { useContext } from "react";
import Modal from "./Modal";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utilities/formatter";
import { UserProgressContext } from "../store/UserProgressContextProvider";
import CartItem from "./CartItem";

export default function Cart({}) {
  const ctxVal = useContext(CartContext);
  const userCntxPrgrs = useContext(UserProgressContext);

  function handleCloseCart() {
    userCntxPrgrs.hideCart();
  }

  const cartTotal = ctxVal.items.reduce(
    (prevTtl, item) => prevTtl + item.quantity * item.price,
    0
  );
  return (
    <Modal open={userCntxPrgrs.progress === "cart"}>
      <h2>YouR cArT</h2>
      <ul>
        {ctxVal.items.map((e) => (
          <CartItem key={e.id} item={e} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
