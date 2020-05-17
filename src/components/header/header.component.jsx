import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux' //A HOC that lets us modify components to have access to things related to Redux

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'


const Header = ({ currentUser }) => (
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
    </div>
  </div>
)

// Use the ternary operator to generate a SIGN OUT button if the user is signed in, and to return to 
// a SIGN IN button when the user is signed out

// redux: this function connects state header with the userReducer w/o going though App.js
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)