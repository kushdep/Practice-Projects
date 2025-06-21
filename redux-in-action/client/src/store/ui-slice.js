import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const uiSlice = createSlice({
    name: 'ui',
    initialState: { isCartVisible: false, notification: null },
    reducers: {
        showCart(state) {
            state.isCartVisible = !state.isCartVisible
        },

        showNotification(state, action) {
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message }
        }
    }
})





export const uiActions = uiSlice.actions

export default uiSlice
