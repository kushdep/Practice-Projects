import { useContext } from "react";
import Modal from "./Modal";
import Error from "./Error";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utilities/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "../hooks/usehttp";
import { UserProgressContext } from "../store/UserProgressContextProvider";
import { useActionState } from "react";

const reqConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const ctxVal = useContext(CartContext);
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", reqConfig);

  function checkoutAction(prevState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");
    const street = formData.get("street");

    sendRequest(
      JSON.stringify({
        order: {
          items: ctxVal.items,
          customer: {
            name,
            street,
            email,
            postalCode,
            city,
          },
        },
      })
    );

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

  function handleFinish() {
    cntxPrgrs.hideCheckOut();
    ctxVal.clearCartItem();
    clearData();
  }

  let actions = (
    <>
      <Button onClick={handleClose} type="button" textOnly>
        Close
      </Button>
      <Button
        onClick={async () => {
          console.log(formState);
        }}
      >
        Submit Order
      </Button>
    </>
  );

  if (isSending) {
    <span>Placing Order....</span>;
  }

  if (!error && data) {
    return (
      <Modal open={cntxPrgrs.progress === "checkout"} onclose={handleFinish}>
        <h2>Success!!</h2>
        <p>Order Submitted Successfully...</p>
        <Button onClick={handleFinish}>Okay</Button>
      </Modal>
    );
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
        {error && <Error title="Failed to Submit Order " message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
