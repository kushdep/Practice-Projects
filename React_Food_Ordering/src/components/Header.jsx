import { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import Cart from "./Cart";
import { UserProgressContext } from "../store/UserProgressContextProvider";

export function Header() {
  const cartCtx = useContext(CartContext);
  const userCntxPrgrs = useContext(UserProgressContext)

  function handleShowModal() {
    userCntxPrgrs.showCart()
  }

  const totalCartItems = cartCtx.items.reduce((totalItems, e) => {
    return totalItems + e.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowModal}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
