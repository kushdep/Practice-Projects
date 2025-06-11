import { createContext } from "react";

export const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

export function CartContextProvider({children}){

    return <CartContext>

    </CartContext>
} 


export default CartContext
