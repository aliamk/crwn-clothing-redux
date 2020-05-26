import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'


import './cart-dropdown.styles.scss'

/* When user adds items to cart, map over the cartItems property array 
looking for ids of added items and display them in the cart dropdown */
const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'> 
      {
        cartItems.map(cartItem => ( 
          <CartItem 
          key={cartItem.id} 
          item={cartItem}
          />
        ))
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

// Tell App to look for state in cart-item and not in App.js
// Use Reselect to stop the cart dropdown re-rendering on every unrelated state change. 
 const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(
  mapStateToProps
)(CartDropdown)