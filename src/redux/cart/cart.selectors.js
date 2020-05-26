import { createSelector } from 'reselect'

//  In order to MEMOIZE the cart's quantity property

/* Two types of selector:  INPUT SELECTOR and OUTPUT SELECTOR  */

/* INPUT SELECTOR: Takes the whole state and returns a slice of it (doesn't use createSelector)
*/

const selectCart = state => state.cart
// const selectUser = state => state.user

// OUTPUT Selector (uses createSelector)
/* Two arguments go into createSelector (an array of input selectors and a function 
that returns the value u want from the selector) */

export const selectCartItems = createSelector(
  [selectCart/*, selectUser */], // Argument one
  (cart/*, user */ ) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity,
      0
    )
)

