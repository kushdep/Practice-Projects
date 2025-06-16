import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utilities/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContextProvider";

export default function Checkout() {
  const ctxVal = useContext(CartContext);
  const totalAmt = ctxVal.items.reduce(
    (prevTtl, item) => prevTtl + item.quantity * item.price,
    0
  );
  const cntxPrgrs = useContext(UserProgressContext);

  function handleClose() {
    cntxPrgrs.hideCheckOut();
  }

  return (
    <Modal open={cntxPrgrs.progress === "checkout"} onclose={handleClose}>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(totalAmt)}</p>

        <Input label="Full Name" id="full-name" type="text" />
        <Input label="Email" id="email" type="email" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        <p className="modal-actions">
        <Button onClick={handleClose} type="button" textOnly>
          Close
        </Button>
        <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
