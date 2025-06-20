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

export const getCartData = () => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending....',
            message: 'Sending cart data!'
        }))

        async function getData() {
            const response = await fetch('https://redux-cfa64-default-rtdb.firebaseio.com/cart.json', { method: 'GET' })
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }

            const responseData = await response.json()

            return responseData
        }
        try {
            await getCartData   ()

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sending cart data Successfully!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending....',
            message: 'Sending cart data!'
        }))

        async function sendRequest() {
            const response = await fetch('https://redux-cfa64-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify(cart) })
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }

        try {
            await sendRequest()

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sending cart data Successfully!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}

export const uiActions = uiSlice.actions

export default uiSlice
