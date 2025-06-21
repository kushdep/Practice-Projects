import { cartActions } from "./card-slice"
import { uiActions } from "./ui-slice"

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending....',
            message: 'Sending cart data!'
        }))

        async function sendRequest() {
            const response = await fetch('https://redux-cfa64-default-rtdb.firebaseio.com/cart.json', { method: 'PUT', body: JSON.stringify({
                items:cart.items,
                totalQuantity:cart.totalQuantity
            }) })
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

export const getCartData = () => {
    return async (dispatch) => {
        async function getData() {
            const response = await fetch('https://redux-cfa64-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) {
                throw new Error('Fetching cart data failed')
            }
            const responseData = await response.json()

            return responseData
        }
        try {
            const cartData = await getData()
            dispatch(cartActions.replaceCart({
                items:cartData.items || [],
                totalQuantity:cartData.totalQuantity || 0
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }))
        }
    }
}