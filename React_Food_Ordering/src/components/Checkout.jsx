import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utilities/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContextProvider";
import { useActionState } from "react";

export default function Checkout() {
  const ctxVal = useContext(CartContext);

  function checkoutAction(prevState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");
    const street = formData.get("street");


    return {
        name,
        street,
        email,
        postalCode,
        city,
    };
  }

  const [formState, formAction] = useActionState(checkoutAction, {
      name: "",
      street: "",
      email: "",
      postalCode: "",
      city: "",
  });

  const totalAmt = ctxVal.items.reduce(
    (prevTtl, item) => prevTtl + item.quantity * item.price,
    0
  );
  const cntxPrgrs = useContext(UserProgressContext);

  function handleClose() {
    cntxPrgrs.hideCheckOut();
  }

  async function handleSubmit() {
    await fetch('http://localhost:3000/orders',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        order:{
          items:ctxVal.items,
          customer:formState
        }
      })
    })
  }

  return (
    <Modal open={cntxPrgrs.progress === "checkout"} onclose={handleClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(totalAmt)}</p>

        <Input
          label="Full Name"
          id="name"
          name="name"
          type="text"
          defaultValue={formState?.name}
        />
        <Input
          label="Street"
          id="street"
          name="street"
          type="text"
          defaultValue={formState?.street}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          defaultValue={formState?.email}
        />
        <div className="control-row">
          <Input
            label="Postal Code"
            id="postal-code"
            name="postal-code"
            type="text"
            defaultValue={formState?.postalCode}
          />
          <Input
            label="City"
            id="city"
            name="city"
            type="text"
            defaultValue={formState?.city}
          />
        </div>
        <p className="modal-actions">
          <Button onClick={handleClose} type="button" textOnly>
            Close
          </Button>
          <Button onClick={handleSubmit}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
