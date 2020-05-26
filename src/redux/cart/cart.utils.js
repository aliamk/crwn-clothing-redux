/* Check which items already exist in cart and 
whether new items match them 

Does the new item's id match an exisiting item's id
(is existingCartItem true)?

If yes, map over cartItems in order to generate a 
new array, check for id match again, if true again,
return existing item and increase the quantity value by 1

If the ids don't match, just return the existing cart item

If cartItem.id doesn't match cartItemsToAdd.id, then skip the IF block
and return a new array containing the previously added items and the 
new item but give it a base quantity of 1
*/
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
    )
    if (existingCartItem) {
      return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
        )
    }
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
} 