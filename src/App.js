import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component {
  unsubscribeFromAuth = null  // To prevent memory leaks, we need to open and close the subscription

  componentDidMount() {
    const {  setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // firebase allows us to use their auth library methods instead of fetch
      if (userAuth) {   // if user signs-in validly
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {  // return a snapshot of either the existing user in the db
          setCurrentUser({                // or details of the new user 
            id: snapShot.id,
            ...snapShot.data()
          })
          // console.log(this.state)
        })
      } 
      setCurrentUser( userAuth )
      
      createUserProfileDocument(userAuth)
      // console.log(user)
    })  
  }

  componentWillUnmount() {  // Close the subscription
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route  path='/shop' component={ ShopPage } />
          <Route 
            exact path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                < SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// Redirect a signed-in user from the sign-in page
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
