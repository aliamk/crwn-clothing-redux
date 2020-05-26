import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
  </div>
)

// Pass the action (toggleCartHidden) to the cartReducer 
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

// Null is the default action (cart dropdown is hidden, i.e. true)
/* mapDispatchToProps is the action telling the reducer to switch the state 
from default to false i.e., cart dropdown is NOT hidden*/
export default connect(
  null,
  mapDispatchToProps
  )(CartIcon)