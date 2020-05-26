import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux' //A HOC that lets us modify components to have access to things related to Redux

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link> 
      {
        currentUser ?
        <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null :
    <CartDropdown />
    }
  </div>
)

/* Use the ternary operation to generate a SIGN OUT button if the user is signed in,
 and to return to a SIGN IN button when the user is signed out */

 /* Use a ternary operation to show and hide the cart drowdown menu */

// Advanced destructuring for nested values
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(
  mapStateToProps
  )(Header)