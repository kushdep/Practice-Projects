import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(e => newItem.id === e.id)
            state.totalQuantity++
            state.changed = true
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.total = existingItem.total + newItem.price
            }
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.items.find(e => id === e.id)
            state.totalQuantity--
            state.changed = true
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(e => id !== e.id)
            } else {
                existingItem.quantity--;
                existingItem.total -= existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice
