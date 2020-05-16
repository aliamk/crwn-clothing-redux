import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null     // firebase's Google sign-in
    }
  }

  unsubscribeFromAuth = null  // To prevent memory leaks, we need to open and close the subscription

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // firebase allows us to use their auth library methods instead of fetch
      if (userAuth) {   // if user signs-in validly
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {  // return a snapshot of either the existing user in the db
          this.setState ({                // or details of the new user 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          // console.log(this.state)
        })
      } 
      this.setState({ currentUser: userAuth })
      
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
      <Header currentUser = { this.state.currentUser} /> {/* Pass either null or user in from above */}
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
          <Route exact path='/signin' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
