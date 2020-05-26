import CartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils'

// The cart dropdown needs to be hidden by default and set to 0/empty
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

// Keep the dropdown hidden unless the TOGGLE action is triggered
// Keep the cart empty (default state) unless the action (AddToCart button) is triggered
// 'state.cartItems, action.payload' = existing cart items and new cart items
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
      case CartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }
      default:
        return state
  }
}

export default cartReducer
/* Want to use a TOGGLE bc the cart dropdown is either in a true or false state
(either hidden or not hidden). Instead of passing in a value for our action,
we can pass a conditional boolean: if the hidden state is true (dropdown hidden),
then the action should make it false (not hidden) and vice versa.
*/