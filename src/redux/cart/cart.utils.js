/* Check which items already exist in cart and 
whether new items match them */
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