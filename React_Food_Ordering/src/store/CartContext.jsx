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
        updatedItems.push({...action.item,updatedItem})
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return {...state,items:updatedItems}
    }
    case "REMOVE_ITEM": {
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
  return state;
}

export function CartContextProvider({ children }) {
    const [ ] =  useReducer(cartReducer, { items: [] });

  return <CartContext>{children}</CartContext>;
}

export default CartContext;
