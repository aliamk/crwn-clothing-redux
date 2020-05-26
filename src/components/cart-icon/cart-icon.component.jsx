import React from 'react'
import { connect } from 'react-redux'


import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
  </div>
)

// Pass the action (toggleCartHidden) to the cartReducer 
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// Add all the grouped quantities wihtin cartItems and pass to the reducer
/* This is a selector: accesses a small prop from a state within a state; 
the whole of the cart state, then the cartItems state and then slices off 
the quantity property */
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

// Null is the default action (cart dropdown is hidden, i.e. true)
/* mapDispatchToProps is the action telling the reducer to switch the state 
from default to false i.e., cart dropdown is NOT hidden*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CartIcon)