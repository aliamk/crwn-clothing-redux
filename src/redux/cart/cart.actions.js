import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

// The payload of the action is the item that the user is trying to add to the cart
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})