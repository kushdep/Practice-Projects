import { createContext, useReducer, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (i) => i.id === action.item.id
      );
      const updatedItems = [...state.items];

      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems.push({ ...action.item, updatedItem });
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return { ...state, items: updatedItems };
    }
    case "REMOVE_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (i) => i.id === action.id
      );
      const existingCartItem = state.item[existingCartItemIndex];

      const updatedItems = [...state];
      if (existingCartItemIndex === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems.items[existingCartItemIndex] = updatedItem;
      }
      return { ...state, items: updatedItems };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  }

  const contxVal = {
    items: cart.items,
    addItem,
    removeItem
  };

  return <CartContext val={contxVal}>{children}</CartContext>;
}

export default CartContext;
